import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  const isHomePage = router.pathname === '/';
  const shouldShowGreenBackground = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight;
      
      // Fecha o menu mobile se estiver aberto
      setIsMobileMenuOpen(false);
      
      // Verifica se o navegador suporta scroll-behavior: smooth
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback para navegadores mais antigos
        smoothScrollTo(elementPosition, 800);
      }
    }
  };

  // Função de fallback para scroll suave em navegadores antigos
  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  // Função de easing para animação suave
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  return (
    <header className={`${shouldShowGreenBackground || isMobileMenuOpen ? 'bg-[#203226]' : 'bg-transparent'} fixed top-0 z-40 w-full overflow-hidden transition-all duration-300`}>
      {/* Background pattern - only show when background is green */}
      {shouldShowGreenBackground && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A0B949] rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#A0B949] rounded-full blur-2xl"></div>
        </div>
      )}
      
      <div className={`relative z-10 container mx-auto px-4 py-4 sm:py-6 lg:py-8 transition-all duration-300 ${isScrolled ? '' : 'border-b border-gray-200'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Brasil + Sustentável"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Right side - Contact & CTA */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Phone - Hidden on mobile */}
            <div className="hidden xl:flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#A0B949]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white font-baloo-semibold text-sm">(00) 9 9999-9999</span>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#A0B949] to-[#8FA83A] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 hover:from-[#8FA83A] hover:to-[#7A9430] transition-all cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-baloo-medium hidden sm:inline">Faça um orçamento</span>
              <span className="text-xs sm:text-sm font-baloo-medium sm:hidden">Orçamento</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/20 bg-[#203226]">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer text-left"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white font-baloo-semibold hover:text-[#A0B949] transition-colors cursor-pointer text-left"
              >
                Contato
              </button>
              {/* Mobile Phone */}
              <div className="flex items-center space-x-2 pt-2 border-t border-gray-200/20">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#A0B949]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white font-baloo-semibold text-sm">(00) 9 9999-9999</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
