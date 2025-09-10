export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
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
    <section id="hero" className="relative min-h-screen bg-[url('/bg.png')] bg-cover bg-center overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#A0B949] opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#A0B949] opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#A0B949] opacity-10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center min-h-[70vh] sm:min-h-[80vh] justify-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 max-w-4xl">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-baloo-bold text-white leading-tight">
                Construindo um
                <span className="block text-[#A0B949]">Brasil Mais</span>
                <span className="block">Sustentável</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-4 font-baloo-regular">
                Transformamos ideias em ações concretas para um futuro mais verde e próspero para todos os brasileiros.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-[#A0B949] hover:bg-[#8FA83A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-baloo-semibold transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Saiba Mais</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#203226] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-baloo-semibold transition-all duration-300 cursor-pointer w-full sm:w-auto"
              >
                Nossos Projetos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-baloo-bold text-[#A0B949]">500+</div>
                <div className="text-gray-300 text-sm sm:text-base font-baloo-regular">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-baloo-bold text-[#A0B949]">50+</div>
                <div className="text-gray-300 text-sm sm:text-base font-baloo-regular">Cidades Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-baloo-bold text-[#A0B949]">1M+</div>
                <div className="text-gray-300 text-sm sm:text-base font-baloo-regular">Pessoas Impactadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

