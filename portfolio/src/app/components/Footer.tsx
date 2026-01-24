import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            © {new Date().getFullYear()} Geffry Ospina. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-current" /> desde Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
