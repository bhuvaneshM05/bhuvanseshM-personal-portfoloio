import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', handleScrollSpy);
    // Trigger on mount
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const scrollToSection = (href: string, id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-0'
    }`}>
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'max-w-4xl rounded-full bg-background/80 border shadow-lg backdrop-blur-md border-border/80 px-6' 
          : 'bg-background/95 border-b border-border/50 px-4'
      }`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('#home', 'home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary-glow transition-all">
                Bhuvanesh
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 relative">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-white hover:scale-105'
                    }`}
                  >
                    {/* Active highlight pill */}
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10 animate-fade-in" />
                    )}
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden rounded-full hover:bg-primary/25"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
            </Button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className={`md:hidden bg-background/95 backdrop-blur-md rounded-2xl mt-2 border border-border/80 shadow-2xl p-4 overflow-hidden transition-all duration-300`}>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href, item.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-primary/20 text-primary border-l-4 border-primary pl-3' 
                          : 'text-muted-foreground hover:text-white hover:bg-secondary/50'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;