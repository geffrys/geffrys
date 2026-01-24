export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 30 },
        { name: 'Angular', level: 55 },
        { name: 'TypeScript', level: 50 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 60 },
        { name: 'Java', level:60 },
        { name: 'PostgreSQL', level: 40 },
        { name: 'REST APIs', level: 50 },
      ],
    },
    {
      category: 'Herramientas & Otros',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  const otrasSkills = [
    'Agile/Scrum',
    'Jest',
    'Web Performance',
    'Trabajo en equipo',
    'Resolución de problemas',
  ];

  return (
    <section id="conocimientos" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Conocimientos
        </h2>
        <div className="w-20 h-1 bg-gray-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-600">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-gray-500 to-gray-400 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-gray-700 p-8 rounded-lg border border-gray-600">
          <h3 className="text-xl font-bold text-white mb-4">
            Otras Habilidades
          </h3>
          <div className="flex flex-wrap gap-3">
            {otrasSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg hover:border-gray-500 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}