import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Articles', href: '#articles' },
    { label: 'Topics', href: '#topics' },
    { label: 'Authors', href: '#authors' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-ink tracking-tight">
              The Scholarly
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Subscribe Button - Desktop */}
          <button className="hidden md:inline-flex items-center px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors duration-200">
            Subscribe
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button className="w-full py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
