"use client";

import {
  CheckCircle,
  BookOpen,
  MessageSquare,
  Stethoscope,
  Languages,
  ListChecks,
  Clock,
  Target,
  Users,
  Heart,
  Award
} from "lucide-react";

const WhatMakesItDifferent = () => {
  const features = [
    {
      text: "Real clinical cases from actual practice",
      icon: Stethoscope,
      description: "Authentic patient scenarios you'll encounter daily"
    },
    {
      text: "Authentic medical dialogues",
      icon: MessageSquare,
      description: "Conversations between providers and patients"
    },
    {
      text: "Designed specifically for healthcare providers",
      icon: Users,
      description: "Created by and for medical professionals"
    },
    {
      text: "Intermediate level—easy to follow, clinically accurate",
      icon: BookOpen,
      description: "Perfect balance of accessibility and depth"
    },
    {
      text: "Pronunciation guidance by native speakers",
      icon: Languages,
      description: "Audio support for proper articulation"
    },
    {
      text: "Glossary of 1,000+ essential medical terms",
      icon: ListChecks,
      description: "Comprehensive terminology reference"
    },
    {
      text: "Organized for quick reference during patient encounters",
      icon: Clock,
      description: "Find what you need in seconds"
    },
    {
      text: "Cultural competence integration",
      icon: Heart,
      description: "Understand cultural nuances in healthcare"
    },
    {
      text: "Focus on patient-centered communication",
      icon: Target,
      description: "Build trust and improve patient outcomes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#002EC1]/10 text-[#002EC1] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Unique Value Proposition
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes This Book <span className="text-[#002EC1]">Different</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike generic language books, this is specifically crafted for healthcare 
            professionals who need practical, immediately applicable Spanish skills.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#002EC1]/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                {/* Icon Container */}
                <div className="p-3 bg-gradient-to-br from-[#002EC1]/5 to-white rounded-xl group-hover:from-[#002EC1]/10 group-hover:to-white transition-colors shadow-sm">
                  <item.icon className="w-6 h-6 text-[#002EC1]" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#002EC1] transition-colors">
                    {item.text}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-8 md:p-10 text-white mb-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Compared to Other Resources
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">This Book</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Real clinical scenarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Medical terminology focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Immediate applicability</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">vs</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white/70" />
                </div>
                <h4 className="text-xl font-bold mb-3">Generic Books</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                    <span className="opacity-80">General conversations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                    <span className="opacity-80">Basic vocabulary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                    <span className="opacity-80">Limited medical content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Selling Points */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Healthcare Professionals Choose This Book
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Time-Efficient",
                description: "Learn what you need for patient care, not tourism",
                icon: "⏱️"
              },
              {
                title: "Patient-Focused",
                description: "Build trust through better communication",
                icon: "❤️"
              },
              {
                title: "Professionally Vetted",
                description: "Created and reviewed by medical professionals",
                icon: "✅"
              },
              {
                title: "Immediately Useful",
                description: "Apply phrases the same day you learn them",
                icon: "🚀"
              }
            ].map((point, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl border border-gray-200 text-center"
              >
                <div className="text-3xl mb-3">{point.icon}</div>
                <h4 className="font-bold text-[#002EC1] mb-2">{point.title}</h4>
                <p className="text-sm text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Improve Your Patient Communication?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of healthcare professionals who have transformed their 
              Spanish communication skills with this specialized resource.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#002EC1]/30 transition-all duration-300 hover:scale-[1.02]">
                Get the Book Now
              </button>
              <button className="px-8 py-3 bg-white text-[#002EC1] font-semibold rounded-xl border-2 border-[#002EC1]/20 hover:border-[#002EC1]/40 transition-all duration-300">
                See Sample Chapter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesItDifferent;