export default function HeroSection() {
  // Random professional profile images for trust indicators
  const randomProfileImages = [
    "/doc1.jpg", 
    "/doc5.jpg", 
    "/doc3.jpg", 
    "/doc4.jpg", 
    "/doc5.jpg",
  ];

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#142B47]/5 via-[#142B47]/5 to-white px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0B8288]/20 shadow-sm">
              <span className="w-2 h-2 bg-[#0B8288] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#142B47]">Trusted by 1,000+ healthcare professionals</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master <span className="text-[#0B8288] relative">
                Medical Spanish
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#0B8288]/30 rounded-full"></span>
              </span>  
            
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Learn <strong className="text-[#0B8288]">real medical phrases</strong>, specialized vocabulary, and 
              clinical scenarios in Spanish to effectively work with patients and healthcare teams.
              Bridge the language gap and provide better care.
            </p>
          </div>

          {/* Key Benefits List */}
          <ul className="space-y-3">
            {[
              "Real-world clinical cases and practical dialogues",
              "Perfect for doctors, nurses, PA's, and medical students",
              "Includes audio pronunciation guides by native speakers",
              "Access to private community of healthcare professionals",
              "Printable cheat sheets and quick reference guides",
              "HIPAA-compliant patient interview templates"
            ].map((item, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-gray-700 hover:text-[#142B47] transition-colors"
              >
                <span className="text-[#0B8288] text-xl mt-0.5">✓</span>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Section */}
          <div className="pt-4 space-y-6">
            <div className="space-y-2">
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0B8288] to-[#142B47] text-white text-lg font-semibold rounded-xl hover:rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#0B8288]/30 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                aria-label="Get the book with free bonuses"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Get the Book</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#142B47] to-[#0B8288] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Limited Time Offer */}
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                  Limited Time Offer
                </span>
              </p>
            </div>
            
            {/* Social Proof with Real Images */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {randomProfileImages.slice(0, 4).map((imgUrl, index) => (
                    <img
                      key={index}
                      src={imgUrl}
                      alt={`Healthcare professional ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm hover:scale-110 transition-transform duration-200"
                      loading="lazy"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-[#0B8288]/10 border-2 border-white flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-[#142B47]">+500</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-[#142B47]">Healthcare professionals have improved patient communication</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-gray-700">4.9/5 from 487 verified reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Image Section */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background decorative elements */}
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#0B8288]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-[#142B47]/10 rounded-full blur-3xl"></div>
          
          {/* Book Container */}
          <div className="relative group">
            {/* Shadow effect */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/10 blur-xl rounded-full"></div>
            
            {/* Book Image */}
            <div className="relative">
              <img
                src="/book-mockup.jpg" // Replace with your actual book image
                alt="Medical Spanish Guide Book - Complete language resource for healthcare providers"
                className="w-full max-w-md lg:max-w-lg transform group-hover:rotate-[-2deg] group-hover:scale-105 transition-all duration-500 shadow-2xl shadow-[#0B8288]/20 rounded-2xl"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}