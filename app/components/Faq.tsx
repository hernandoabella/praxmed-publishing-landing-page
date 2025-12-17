"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Clock, Download, Headphones, Mail, FileText, Volume2, GraduationCap } from "lucide-react";

const faqs = [
  {
    question: "Does the book include real clinical cases?",
    answer: "Yes! The book includes 3 detailed real clinical cases that strengthen practical learning. These cases cover: 1) Diabetic foot assessment and management, 2) Prenatal visit with complications, and 3) Post-operative follow-up with complication screening. Each case walks you through complete patient interactions from symptoms to treatment plans."
  },
  {
    question: "Does it include a glossary?",
    answer: "Yes—a complete glossary of over 1,000 essential medical Spanish terms and phrases organized by medical system. The glossary includes symptoms, anatomy, diagnoses, procedures, and treatment terms, all with phonetic pronunciation guides for easy learning."
  },
  {
    question: "Are the audio tracks included?",
    answer: "Yes—you receive free lifetime access to downloadable MP3 audio files featuring native Spanish-speaking healthcare professionals. The audio library includes pronunciation of all medical terms, complete dialogues from clinical scenarios, and both slow and normal-speed recordings for practice."
  },

];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to get appropriate icon for each FAQ
  const getIconForFaq = (index: number) => {
    const question = faqs[index].question.toLowerCase();
    
    if (question.includes('clinical case') || question.includes('case')) {
      return <FileText className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('glossary') || question.includes('term')) {
      return <BookOpen className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('audio') || question.includes('track') || question.includes('mp3')) {
      return <Volume2 className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('beginner') || question.includes('level') || question.includes('learning')) {
      return <GraduationCap className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('different') || question.includes('other') || question.includes('compare')) {
      return <Users className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('format') || question.includes('download') || question.includes('digital')) {
      return <Download className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('time') || question.includes('complete') || question.includes('long')) {
      return <Clock className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('hospital') || question.includes('clinic') || question.includes('use')) {
      return <HelpCircle className="w-5 h-5 text-[#002EC1]" />;
    }
    if (question.includes('guarantee') || question.includes('refund') || question.includes('money')) {
      return <HelpCircle className="w-5 h-5 text-[#002EC1]" />;
    }
    return <HelpCircle className="w-5 h-5 text-[#002EC1]" />;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#002EC1]/10 text-[#002EC1] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#002EC1]">Questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about the Medical Spanish Guide for Healthcare Professionals.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#002EC1]/30 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div
                onClick={() => toggle(index)}
                className="p-6 cursor-pointer flex justify-between items-center"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#002EC1]/10 rounded-lg group-hover:bg-[#002EC1]/20 transition-colors">
                    {getIconForFaq(index)}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <div className="p-2 bg-[#002EC1]/10 rounded-full">
                      <ChevronUp className="w-5 h-5 text-[#002EC1]" />
                    </div>
                  ) : (
                    <div className="p-2 bg-gray-100 rounded-full group-hover:bg-[#002EC1]/10 transition-colors">
                      <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-[#002EC1]" />
                    </div>
                  )}
                </div>
              </div>
              
              {openIndex === index && (
                <div className="px-6 pb-6 ml-14">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-8 md:p-10 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-blue-100 mb-6">
              Our team is here to help. Contact us directly for personalized assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-[#002EC1] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
                Email Our Support Team
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                Schedule a Call
              </button>
            </div>
            
            <p className="text-sm text-blue-200 mt-6">
              Typically respond within 24 hours • Healthcare professionals available to answer clinical questions
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Faq;