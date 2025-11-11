import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact' },
    { href: '#get-involved', label: 'Get Involved' },
    { href: '#news', label: 'News & Events' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#004D40] to-[#F2C94C] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#004D40]">AAYF</h1>
              <p className="text-xs text-[#3E2723]">Rise Up Africa</p>
            </div>
          </a>

          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#3E2723] hover:text-[#004D40] font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2C94C] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#004D40] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-[#3E2723] hover:text-[#004D40] hover:bg-[#F6F2EC] px-4 rounded transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
