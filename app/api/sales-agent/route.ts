import { openrouter } from "@openrouter/ai-sdk-provider";
import { streamText, tool } from "ai";
import { z } from "zod";

// Praxmed Publishing product catalog
const PRODUCT_CATALOG = [
  {
    id: "medical-spanish",
    title: "Medical Spanish for Healthcare Professionals",
    description:
      "Essential Spanish for healthcare professionals — phrases, patient history, emergency vocabulary, and clinical communication.",
    price: "$9.99 (Kindle) / $24.99 (Paperback)",
    url: "https://www.amazon.com/dp/B0G9VMBH6W",
    image: "/books-frontpage/medical-spanish-for-healthcare-professionals.jpg",
  },
  {
    id: "anger-management",
    title: "Anger Management for Explosive Parents",
    description:
      "Tools and step-by-step guidance for breaking yelling patterns and repairing trust after conflict.",
    price: "$0.99 (Kindle) / $9.99 (Paperback) / Free with Audible trial",
    url: "https://www.amazon.com/dp/B0GGJ3GPDF",
    image: "/books-frontpage/anger-managment-for-explosive-parents.jpg",
  },
  {
    id: "raising-children",
    title: "Raising Emotionally Intelligent Children",
    description:
      "A practical guide for helping parents nurture empathy, emotional awareness, and confidence in everyday family life.",
    price: "$9.99 (Kindle) / $24.99 (Paperback)",
    url: "https://www.amazon.com/dp/B0GKWC93RZ",
    image: "/books-frontpage/raising-emotionally-intelligent-children.jpg",
  },
  {
    id: "breaking-trauma",
    title: "Breaking Generational Trauma for Parents",
    description:
      "A parent-focused guide for recognizing inherited patterns, building healthier responses, and creating a safer family dynamic.",
    price: "$9.99 (Kindle) / $24.99 (Paperback)",
    url: "https://www.amazon.com/dp/B0FNX6ZC6C",
    image: "/books-frontpage/breaking-generational-trauma-for-parents.jpg",
  },
  {
    id: "anxious-attachment",
    title: "Anxious Attachment Workbook For Parents",
    description:
      "A supportive workbook for parents who want calmer responses, more emotional safety, and stronger connection at home.",
    price: "$9.99 (Kindle) / $19.99 (Paperback)",
    url: "https://www.amazon.com/dp/B0GQXCYHXZ",
    image: "/books-frontpage/anxius-attachment-workbook.jpg",
  },
  {
    id: "audiobook-anger",
    title: "Anger Management for Explosive Parents (Audiobook)",
    description:
      "Listen to the audiobook version — perfect for busy parents on the go.",
    price: "Free with Audible trial",
    url: "https://www.amazon.com/Anger-Management-Explosive-Parents-Understand/dp/B0HCCNTXTT",
  },
];

const COMPANY_INFO = {
  name: "Praxmed Publishing",
  description:
    "Praxmed Publishing creates practical, evidence-based books and audiobooks for healthcare professionals and parents.",
  website: "https://praxmedpublishing.com",
  contact: "contact@praxmedpublishing.com",
};

export const maxDuration = 60;

const PRIMARY_MODEL =
  process.env.CHAT_MODEL ?? "google/gemma-4-26b-a4b-it:free";

// Fallback chain: OpenRouter automatically tries each model in priority order
// when the previous one is rate-limited, down, or refuses. The free tier is a
// heavily shared pool, so a single model fails often — these backups are what
// keep the chat from dying mid-conversation.
// NOTE: OpenRouter rejects chains longer than 3 models, so cap the array.
const FALLBACK_MODELS = (
  process.env.CHAT_FALLBACK_MODELS ??
  "google/gemma-4-31b-it:free,openai/gpt-oss-20b:free"
)
  .split(",")
  .map((m) => m.trim())
  .filter(Boolean);

const MODEL_CHAIN = [
  PRIMARY_MODEL,
  ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL),
].slice(0, 3);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openrouter(PRIMARY_MODEL),
      // Fail fast instead of hanging through retries: the free model is often
      // rate-limited, and waiting through backoff makes the chat feel frozen.
      // OpenRouter's models array below handles cross-model fallback, and the
      // client shows a friendly error + retry button as a last resort.
      maxRetries: 1,
      providerOptions: {
        openrouter: {
          // Primary + fallbacks, tried in order by OpenRouter itself.
          models: MODEL_CHAIN,
        },
      },
      system: `You are Praxmed — a friendly, knowledgeable Sales Assistant for Praxmed Publishing.

You are a real person helping visitors find books. Think of yourself as a helpful bookstore employee who genuinely cares about getting people the right resource.

LANGUAGE:
- Speak ONLY in natural, warm ENGLISH
- No Spanish. No Spanglish. No "¡Hola!", "¡Gracias!", "Welcome!", or any Spanish phrases.
- Be conversational, not robotic. Don't say "I apologize" or similar corporate phrases.
- Sign off warmly: "Thanks for reaching out to Praxmed Publishing!"

COMPANY:
${COMPANY_INFO.name}
${COMPANY_INFO.description}
Contact: ${COMPANY_INFO.contact}
Website: ${COMPANY_INFO.website}

PRODUCT CATALOG (only recommend from this list):
${PRODUCT_CATALOG.map((p) => `${p.title} | ${p.price} | ${p.url}`).join("\n")}

KEY DETAILS TO KNOW:
- All books are sold through Amazon
- Kindle books are delivered instantly (no shipping needed)
- Paperbacks ship directly from Amazon
- Amazon handles all shipping and returns — Prime shipping available on most orders
- Returns: Amazon's standard return policy applies (30 days for most items)

FORMAT EVERY ANSWER:
- Use markdown formatting with clear paragraphs separated by blank lines
- Use bullet points for price/options lists
- Format: **Book Title** (bold)
- Always include at least one link formatted as: [link text](url)
- Use Amazon affiliate links from the catalog above
- Be concise — 2-4 short paragraphs max
- Mention price and format when recommending a book
- Always end with a question to keep the conversation going

TONE:
- Helpful, friendly, slightly casual
- If asked about shipping/returns: just say "All our books ship directly from Amazon with Prime shipping, and Amazon's standard 30-day return policy applies."
- If asked for a recommendation: pick the right book from the catalog and link it
`,
      messages,
      tools: {
        getBookInfo: tool({
          description:
            "Get detailed information about a specific book from the Praxmed catalog.",
          inputSchema: z.object({
            bookName: z
              .string()
              .describe("The name or keyword of the book to look up"),
          }),
          execute: async ({ bookName }) => {
            const book = PRODUCT_CATALOG.find(
              (b) =>
                b.title.toLowerCase().includes(bookName.toLowerCase()) ||
                bookName.toLowerCase().includes(b.id),
            );
            if (!book) return { error: "Book not found in catalog" };
            return book;
          },
        }),
        getAllBooks: tool({
          description:
            "Get the complete catalog of all books and audiobooks from Praxmed Publishing.",
          inputSchema: z.object({}),
          execute: async () => {
            return PRODUCT_CATALOG;
          },
        }),
      },
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Sales agent error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500 },
    );
  }
}
