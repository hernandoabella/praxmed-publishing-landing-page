import { FaStethoscope, FaComments, FaBookMedical, FaNotesMedical, FaUserNurse, FaClinicMedical } from "react-icons/fa";

const skills = [
  {
    icon: <FaBookMedical size={28} />,
    title: "Vocabulario médico esencial",
    description: "Aprende más de 500 términos médicos en español usados en hospitales reales."
  },
  {
    icon: <FaComments size={28} />,
    title: "Frases reales Doctor – Paciente",
    description: "Domina preguntas, respuestas y explicaciones médicas profesionales."
  },
  {
    icon: <FaClinicMedical size={28} />,
    title: "Comunicación por departamentos",
    description: "Frases listas para urgencias, pediatría, farmacia, triage y más."
  },
  {
    icon: <FaNotesMedical size={28} />,
    title: "Historia clínica en español",
    description: "Aprende a escribir y entender reportes médicos correctamente."
  },
  {
    icon: <FaUserNurse size={28} />,
    title: "Mayor confianza profesional",
    description: "Comunícate con seguridad en entornos médicos reales."
  },
  {
    icon: <FaStethoscope size={28} />,
    title: "Español aplicado a la práctica",
    description: "Nada de teoría innecesaria, todo 100% útil."
  }
];

export default function WhatYouWillLearn() {
  return (
    <section className="w-full py-20 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C81]">
            ¿Qué aprenderás con Medical Spanish?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Beneficios claros, prácticos y enfocados en situaciones reales de la salud.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#00BFA6]/10 text-[#00BFA6] rounded-full mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#pricing"
            className="inline-block bg-[#0F4C81] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >
            Quiero aprender Medical Spanish
          </a>
        </div>

      </div>
    </section>
  );
}
