export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-baloo-semibold text-[#A0B949] uppercase tracking-wider mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-baloo-bold text-[#203226] leading-tight">
            Preservando a Terra Para
            <span className="block">Futuras Gerações</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6">
            <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-[#A0B949] to-[#8FA83A] rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-baloo-bold text-[#203226] mb-3 sm:mb-4">
              Consultoria Ambiental
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-baloo-regular">
              Assessoria especializada em gestão ambiental, licenciamento e compliance para empresas e organizações.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6">
            <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-[#A0B949] to-[#8FA83A] rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-baloo-bold text-[#203226] mb-3 sm:mb-4">
              Energia Renovável
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-baloo-regular">
              Projetos de energia solar, eólica e outras fontes renováveis para comunidades e empresas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6">
            <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-[#A0B949] to-[#8FA83A] rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-baloo-bold text-[#203226] mb-3 sm:mb-4">
              Educação Ambiental
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-baloo-regular">
              Programas educativos e capacitação em sustentabilidade para escolas, empresas e comunidades.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6">
            <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-[#A0B949] to-[#8FA83A] rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-baloo-bold text-[#203226] mb-3 sm:mb-4">
              Gestão de Resíduos
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-baloo-regular">
              Soluções integradas para redução, reutilização e reciclagem de resíduos urbanos e industriais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
