import { FileText, Headphones, MessageSquare, ClipboardList, Clock, Download, Check } from "lucide-react";

export default function BonusSection() {
  const bonuses = [
    {
      title: "Essential Medical Phrases PDF",
      description: "50+ most-used phrases in real clinical settings with contextual examples",
      value: "$27",
      icon: <FileText className="w-12 h-12 text-[#002EC1]" />,
      features: ["Emergency phrases", "Patient assessment", "Treatment explanations", "Printable format"]
    },
    {
      title: "Audio Pronunciation Library",
      description: "Native speaker recordings of medical terms and patient dialogues",
      value: "$35",
      icon: <Headphones className="w-12 h-12 text-[#002EC1]" />,
      features: ["Medical terminology", "Patient dialogues", "Slow & normal speed", "Downloadable MP3"]
    },
    {
      title: "Clinical Conversation Templates",
      description: "Step-by-step guides for patient interviews in different specialties",
      value: "$29",
      icon: <MessageSquare className="w-12 h-12 text-[#002EC1]" />,
      features: ["ER conversations", "Pediatric visits", "Surgical consent", "Follow-up calls"]
    },
    {
      title: "Medical History Forms Pack",
      description: "Editable bilingual templates for patient data collection",
      value: "$24",
      icon: <ClipboardList className="w-12 h-12 text-[#002EC1]" />,
      features: ["HIPAA compliant", "Bilingual layout", "Editable PDF", "Quick reference"]
    }
  ];

  const totalValue = 27 + 35 + 29 + 24;

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIMITED TIME BONUS PACKAGE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get These <span className="text-[#002EC1]">Exclusive Bonuses</span> Free
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Purchase the book today and receive these premium resources at no extra cost
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 hover:border-[#002EC1]/30 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#002EC1]/5 to-white shadow-inner">
                      {bonus.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{bonus.title}</h3>
                      <span className="text-sm font-bold bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white px-3 py-1 rounded-full">
                        Value: {bonus.value}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{bonus.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {bonus.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="p-0.5 bg-[#002EC1]/10 rounded-full">
                            <Check className="w-3 h-3 text-[#002EC1] flex-shrink-0" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-4 bg-gradient-to-r from-blue-50 to-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Individual price</span>
                  <span className="font-bold text-lg text-[#002EC1]">{bonus.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value & CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Complete Bonus Package
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-blue-200">${totalValue}</div>
                    <div className="space-y-1">
                      <div className="text-sm text-blue-100">Total individual value</div>
                      <div className="text-sm text-white font-medium">4 premium resources</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-0.5 bg-white/20 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-100">Instant digital access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-0.5 bg-white/20 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-100">Lifetime updates included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-0.5 bg-white/20 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-100">Professional use rights</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    FREE
                  </div>
                  <div className="text-xl text-blue-200 font-semibold">
                    with your book purchase
                  </div>
                </div>
                
                <button className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl w-full md:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-lg">Download All Bonuses + Book</span>
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <p className="text-blue-100 text-sm mt-4">
                  Limited time offer • Bonus access delivered instantly
                </p>
              </div>
            </div>
          </div>

          {/* Scarcity Timer */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#002EC1]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#002EC1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Limited Time Bonus</h4>
                  <p className="text-sm text-gray-600">This offer expires soon</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">24</div>
                  <div className="text-xs text-gray-500 mt-1">HOURS</div>
                </div>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">59</div>
                  <div className="text-xs text-gray-500 mt-1">MINUTES</div>
                </div>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">59</div>
                  <div className="text-xs text-gray-500 mt-1">SECONDS</div>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white font-semibold rounded-lg hover:from-[#002EC1]/90 hover:to-[#0B316D]/90 transition-all shadow-lg hover:scale-[1.02]">
                Claim Bonuses Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}