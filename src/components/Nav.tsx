import { useState, useEffect } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Our Services" },
    { id: "vision", label: "Vision & Mission" },
    { id: "team", label: "Our Team" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" },
  ];

  // Smooth scroll function
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for sticky nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav 
      className="bg-blue-700 sticky top-0 z-50 shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center py-4 space-x-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-700 ${
                activeSection === link.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-blue-100 hover:text-white'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile menu button */}
          <div className="flex justify-between items-center py-4">
            <span className="text-white font-bold text-lg">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 p-2 rounded cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu items */}
          <div 
            id="mobile-menu"
            className={`overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    activeSection === link.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;