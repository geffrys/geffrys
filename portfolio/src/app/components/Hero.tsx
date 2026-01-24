import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-5xl">GO</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hola, soy <span className="text-gray-300">Geffry Ospina</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Desarrollador Backend apasionado por crear soluciones eficientes y escalables.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Conoce más sobre mí
          </button>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gray-800 text-white border-2 border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contáctame
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-500 hover:text-gray-400 transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}