import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Geffry Dev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('conocimientos')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Conocimientos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-gray-700">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('conocimientos')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Conocimientos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}