"use client";

import { Check, Target, Brain, MessageSquare, Users, Award, Clock, BookOpen } from "lucide-react";
import { useState } from "react";

const WhatYouWillLearn = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'clinical' | 'bonus'>('core');

  const coreSkills = [
    {
      title: "Medical History Taking",
      description: "Ask about symptoms, onset, duration, and severity in clear, culturally appropriate Spanish.",
      subSkills: ["Chief complaint", "Present illness", "Past medical history", "Social history"]
    },
    {
      title: "Physical Examination Phrases",
      description: "Guide patients through physical exams with precise Spanish instructions.",
      subSkills: ["Vital signs instructions", "System-specific exams", "Positioning commands", "Comfort reassurance"]
    },
    {
      title: "Treatment Explanations",
      description: "Clearly explain medications, procedures, and treatment plans to patients.",
      subSkills: ["Medication instructions", "Procedure explanations", "Follow-up care", "Warning signs"]
    },
    {
      title: "Emergency Communication",
      description: "Communicate effectively in urgent situations with appropriate terminology.",
      subSkills: ["Triage questions", "Urgent instructions", "Consent for procedures", "Family communication"]
    }
  ];

  const clinicalModules = [
    {
      system: "Cardiovascular",
      icon: "❤️",
      topics: ["Chest pain evaluation", "Hypertension counseling", "Heart failure management", "Medication adherence"]
    },
    {
      system: "Respiratory",
      icon: "🌬️",
      topics: ["Dyspnea assessment", "Asthma management", "COPD education", "Smoking cessation"]
    },
    {
      system: "Gastrointestinal",
      icon: "🩺",
      topics: ["Abdominal pain history", "Diet counseling", "Procedure preparation", "Medication effects"]
    },
    {
      system: "Neurological",
      icon: "🧠",
      topics: ["Stroke assessment", "Headache evaluation", "Seizure history", "Neurological exams"]
    },
    {
      system: "Musculoskeletal",
      icon: "🦴",
      topics: ["Injury assessment", "Pain management", "Physical therapy instructions", "Orthopedic terms"]
    },
    {
      system: "Endocrine",
      icon: "⚖️",
      topics: ["Diabetes management", "Medication instructions", "Diet counseling", "Complication monitoring"]
    }
  ];

  const bonusFeatures = [
    {
      title: "Audio Pronunciation Guide",
      description: "Native speaker recordings of all dialogues and medical terms",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "Cultural Competence Notes",
      description: "Insights into cultural nuances in Hispanic healthcare interactions",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Quick Reference Sheets",
      description: "Printable cheat sheets for common scenarios and phrases",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Patient Education Templates",
      description: "Ready-to-use templates for explaining common conditions",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#002EC1]/10 text-[#002EC1] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Comprehensive Learning Outcomes
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You'll <span className="text-[#002EC1]">Learn</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master practical Spanish communication skills specifically designed for 
            real-world healthcare scenarios and patient interactions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('core')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'core'
                ? 'bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-[#002EC1]/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Core Communication Skills
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('clinical')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'clinical'
                ? 'bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-[#002EC1]/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Clinical System Modules
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('bonus')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'bonus'
                ? 'bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-[#002EC1]/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Bonus Features
            </div>
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          
          {/* Core Skills Section */}
          {activeTab === 'core' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {coreSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#002EC1]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-[#002EC1]/10 rounded-xl group-hover:bg-[#002EC1]/20 transition-colors">
                        <span className="text-lg font-bold text-[#002EC1]">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                        <p className="text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-[#0B316D] mb-3">Key Components:</h4>
                      <div className="space-y-2">
                        {skill.subSkills.map((subSkill, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#002EC1] rounded-full"></div>
                            <span className="text-sm text-gray-700">{subSkill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Learning Methodology */}
              <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-6">Progressive Learning Approach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold">Step-by-Step</h4>
                      <p className="text-sm opacity-90">Build from basic phrases to complex conversations</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                        <Brain className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold">Contextual Learning</h4>
                      <p className="text-sm opacity-90">Learn phrases within actual clinical scenarios</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold">Practical Application</h4>
                      <p className="text-sm opacity-90">Immediately applicable in your practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clinical Modules */}
          {activeTab === 'clinical' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinicalModules.map((module, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#002EC1]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{module.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900">{module.system}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#002EC1] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs font-medium text-[#0B316D]">
                        ~15-20 phrases per topic
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Clinical Cases */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Clinical Cases Included</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <div className="font-bold text-[#002EC1] mb-2">Case Study 1</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Diabetic Foot Assessment</h4>
                    <p className="text-sm text-gray-600">Complete patient interaction from symptoms to treatment plan</p>
                  </div>
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <div className="font-bold text-[#002EC1] mb-2">Case Study 2</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prenatal Visit</h4>
                    <p className="text-sm text-gray-600">OB/GYN consultation with cultural considerations</p>
                  </div>
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <div className="font-bold text-[#002EC1] mb-2">Case Study 3</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Post-Operative Follow-up</h4>
                    <p className="text-sm text-gray-600">Surgical recovery instructions and complication screening</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bonus Features */}
          {activeTab === 'bonus' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {bonusFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#002EC1]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#002EC1]/10 rounded-xl group-hover:bg-[#002EC1]/20 transition-colors">
                        <div className="text-[#002EC1]">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Value Proposition */}
              <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 border border-[#002EC1]/20">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Learning Package</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#002EC1] mb-2">200+</div>
                      <div className="text-sm text-gray-600">Dialogues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#002EC1] mb-2">12</div>
                      <div className="text-sm text-gray-600">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#002EC1] mb-2">3</div>
                      <div className="text-sm text-gray-600">Case Studies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#002EC1] mb-2">4</div>
                      <div className="text-sm text-gray-600">Bonuses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </section>
  );
};

export default WhatYouWillLearn;