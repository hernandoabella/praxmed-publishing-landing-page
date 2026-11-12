"use client";

import { Target, Heart, Users, Award, Globe, Shield } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Our Mission & Vision
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🏥 About PRAXMED Publishing
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating high-quality, practical educational tools designed specifically 
            for medical professionals who value real-world applicability.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white mb-16 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Our Core Mission
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              To empower healthcare teams with the communication tools they need 
              to provide exceptional, compassionate care—especially when language 
              barriers stand in the way of understanding.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centered Focus</h3>
            <p className="text-gray-600">
              Every resource we create is designed with the patient experience in mind. 
              We believe clear communication is at the heart of compassionate care.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Excellence</h3>
            <p className="text-gray-600">
              Our content is developed by practicing healthcare professionals, ensuring 
              real-world accuracy and immediate clinical applicability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Breaking Barriers</h3>
            <p className="text-gray-600">
We&apos;re committed to eliminating language obstacles in healthcare,

              creating tools that build bridges between providers and diverse patient populations.
            </p>
          </div>
        </div>

        {/* What We Focus On */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Publishing Philosophy
          </h3>
          
          <div className="grid gap-6">
            <FocusPoint
              title="Clarity Above All"
              description="Medical information should be accessible and understandable. We strip away complexity without sacrificing accuracy."
            />
            <FocusPoint
              title="Real Clinical Applicability"
              description="Our resources are designed for actual practice—not just theoretical knowledge. You can use them immediately in your clinical work."
            />
            <FocusPoint
              title="Patient-Centered Communication"
              description="We emphasize compassionate, clear communication that respects patient dignity and promotes shared decision-making."
            />
          </div>
        </div>

        {/* Team & Approach */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Who Stands Behind Our Resources
                </h3>
                <p className="text-gray-600 mb-6">
                  PRAXMED is built by a team of practicing physicians, nurses, 
                  medical educators, and linguists who understand the real challenges 
                  of clinical communication.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Practicing Healthcare Professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Board-Certified Medical Editors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Language & Cultural Experts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Our Promise to You
                </h4>
                <div className="space-y-4">
                  <PromiseItem text="Evidence-based content with current medical guidelines" />
                  <PromiseItem text="Practical tools you can use immediately in practice" />
                  <PromiseItem text="Clear, accessible language without medical jargon overload" />
                  <PromiseItem text="Continuous updates based on clinical feedback" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust PRAXMED for their 
            medical communication and education needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resources"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Our Resources
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-200"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FocusPoint = ({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const PromiseItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);

export default AboutUsSection;