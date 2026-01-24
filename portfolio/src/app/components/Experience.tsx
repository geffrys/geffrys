import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Desarrollador Backend II',
      company: 'GFT Technologies',
      location: 'Medellin, Colombia',
      period: '2025 - Presente',
      description: [
        'Participé en las definiciones de arquitectura para aplicaciones empresariales usando Java, Spring Boot y Outsystems',
        'Implementé arquitecturas de microservicios que mejoraron el rendimiento en un 40%',
        'Mentoricé a 2 desarrolladores junior en mejores prácticas de código',
      ],
    },
    {
      title: 'Solution Consultant III',
      company: 'Sophos Solutions',
      location: 'Medellin, Colombia',
      period: '2022 - 2025',
      description: [
        'Participe en semillas de desarrollo de software con tecnologias low-code y no-code para clientes empresariales',
        'Desarolle proyectos rapidos que permitieron continuidad operativa a clientes durante la contingencias por caida de sistema principal',
        'Colabore con equipos multifuncionales para garantizar la entrega oportuna de soluciones',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Experiencia Profesional
        </h2>
        <div className="w-20 h-1 bg-gray-500 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 md:text-right">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}