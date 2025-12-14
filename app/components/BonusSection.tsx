"use client";

import { Headphones, Download, CheckCircle, Volume2, PlayCircle, Smartphone, Car, Brain } from "lucide-react";

const AudioDownload = () => {
  const audioFeatures = [
    "Real clinical dialogues",
    "Essential medical phrases",
    "Native pronunciation",
    "Symptom-based questions",
    "Emergency commands",
    "Treatment explanations",
    "System-based review questions",
  ];

  const benefits = [
    "Improve accent and pronunciation",
    "Practice anytime, anywhere",
    "Reinforce what you learn in the book",
    "Train your ear for real patient interactions",
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 overflow-hidden">

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-[#002EC1]/10 text-[#002EC1] px-4 py-2 rounded-full">
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-semibold">AUDIO LIBRARY</span>
            </div>

          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {audioFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
              >
                <div className="p-1 bg-[#002EC1]/10 rounded-full group-hover:bg-[#002EC1]/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#002EC1] mt-0.5" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="px-8 pb-8">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-xl border-2 border-blue-200 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#002EC1]/10 rounded-xl">
                  <Volume2 className="w-6 h-6 text-[#002EC1]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Complete Audio Library (MP3 – ZIP)
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Instant download • Lifetime access • Mobile friendly
                  </p>
                </div>
              </div>

              <a
                href="/audio/medical-spanish-audio.zip"
                download
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#002EC1]/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Audio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B316D] to-[#002EC1] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="px-8 pb-8">
          <div className="border-t border-blue-100 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-5 h-5 text-[#002EC1]" />
              <h3 className="text-xl font-bold text-gray-900">
                Why Use the Audio Library?
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#002EC1] rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Smartphone className="w-4 h-4 text-[#002EC1]" />
                    </div>
                    <span className="text-sm text-gray-600">Commute listening</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Car className="w-4 h-4 text-[#002EC1]" />
                    </div>
                    <span className="text-sm text-gray-600">On-the-go practice</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <PlayCircle className="w-4 h-4 text-[#002EC1]" />
                    </div>
                    <span className="text-sm text-gray-600">Active repetition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-8 py-4 bg-gradient-to-r from-blue-50 to-gray-50 border-t border-blue-100">
          <p className="text-sm text-gray-600 text-center">
            Included with <span className="font-semibold text-[#002EC1]">Medical Spanish for Healthcare Professionals</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudioDownload;