export default function AboutBook() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Evidence-Based Language Learning
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-teal-600">Practical Guide</span> to Medical Spanish
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop struggling with language barriers. Start building meaningful connections with Spanish-speaking patients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Book Details */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What's Inside?</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-teal-700">Medical Spanish Mastery</strong> is a practical, 
                clinical-focused guide designed specifically for healthcare providers who need to 
                communicate clearly, safely, and effectively in Spanish within real medical settings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't theoretical Spanish. It's <strong>real-world medical communication</strong>, 
                with <strong>essential clinical phrases</strong>, <strong>medical vocabulary</strong>, and 
                <strong> doctor-patient dialogues</strong> you can apply immediately in hospitals, 
                clinics, emergency rooms, and private practice.
              </p>
            </div>

            {/* Perfect For Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-teal-600">✅</span>
                Who This Book Is For
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: "👨‍⚕️",
                    title: "Physicians & Residents",
                    desc: "Doctors needing better patient communication in Spanish"
                  },
                  {
                    icon: "👩‍⚕️",
                    title: "Nurses & Nurse Practitioners",
                    desc: "For daily patient care and assessment in Spanish"
                  },
                  {
                    icon: "🎓",
                    title: "Medical Students",
                    desc: "Prepare for rotations in Spanish-speaking communities"
                  },
                  {
                    icon: "🏥",
                    title: "Physician Assistants & Techs",
                    desc: "Essential for procedures and patient interviews"
                  },
                  {
                    icon: "🗣️",
                    title: "Healthcare Interpreters",
                    desc: "Build medical vocabulary and context understanding"
                  },
                  {
                    icon: "❤️",
                    title: "Clinics & Hospitals",
                    desc: "Staff training for serving Latino/Hispanic communities"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group hover:bg-teal-50/50 p-3 rounded-lg transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Features & Not For */}
          <div className="space-y-8">
            {/* Key Features */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-teal-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What You'll Master</h3>
              </div>
              
              <div className="grid gap-4">
                {[
                  "Patient History Taking & Assessment",
                  "Explaining Diagnoses & Treatment Plans",
                  "Obtaining Informed Consent in Spanish",
                  "Emergency & Urgent Care Communication",
                  "Medication Instructions & Side Effects",
                  "Cultural Competence in Healthcare",
                  "Medical Documentation Key Terms",
                  "Specialty-Specific Vocabulary (ER, Peds, OB/GYN, etc.)"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bonus Features */}
              <div className="mt-8 pt-8 border-t border-teal-100">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">+ Exclusive Digital Bonuses:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Audio Pronunciations", color: "bg-blue-100 text-blue-800" },
                    { label: "Cheat Sheets", color: "bg-emerald-100 text-emerald-800" },
                    { label: "Flashcards", color: "bg-amber-100 text-amber-800" },
                    { label: "Community Access", color: "bg-purple-100 text-purple-800" }
                  ].map((bonus, index) => (
                    <span key={index} className={`${bonus.color} px-3 py-2 rounded-lg text-sm font-medium text-center`}>
                      {bonus.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Not For Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                Not For General Spanish Learners
              </h3>
              <p className="text-gray-600 mb-6">
                This is a specialized medical resource. If you're looking for these, this might not be the right fit:
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: "🚫",
                    title: "Complete Beginners",
                    desc: "Requires basic Spanish knowledge (A2 level minimum)"
                  },
                  {
                    icon: "🚫",
                    title: "Grammar Theory",
                    desc: "Focuses on practical communication, not grammar rules"
                  },
                  {
                    icon: "🚫",
                    title: "Tourist Spanish",
                    desc: "Specifically medical/clinical contexts only"
                  },
                  {
                    icon: "🚫",
                    title: "Literature/Reading",
                    desc: "Practical speaking/listening focus for patient care"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 bg-red-50/50 rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Note */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Perfect if you already know basic Spanish but need 
                  <strong> medical-specific language skills</strong> for your healthcare practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Bridge the Language Gap?
          </h3>
          <p className="text-teal-100 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who now communicate confidently with Spanish-speaking patients.
          </p>
          <button className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Get the Book Now
          </button>
          <p className="text-teal-200 text-sm mt-4">
            30-day money-back guarantee • Lifetime access to updates
          </p>
        </div>

      </div>
    </section>
  );
}