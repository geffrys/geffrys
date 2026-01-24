import { User, Award, Briefcase, Code } from 'lucide-react';

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-gray-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Soy desarrollador de software con experiencia de +3 años en desarollo de aplicaciones empresariales, trabajando principalmente con tecnologías web como Java y Angular.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Me interesa entender cómo funcionan las cosas por dentro, no solo construir soluciones que “pasen”, sino que sean claras, mantenibles y bien pensadas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Aunque soy una persona más bien reservada, me tomo muy en serio mi trabajo y el aprendizaje continuo. Actualmente estoy enfocado en fortalecer mis bases técnicas y crecer como desarrollador, tanto a nivel profesional como personal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
              <Briefcase className="w-10 h-10 text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
              <p className="text-gray-400">Años de Experiencia</p>
            </div>

            

            

        
          </div>
        </div>
      </div>
    </section>
  );
}