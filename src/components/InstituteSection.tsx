import Image from 'next/image';

export default function InstituteSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-baloo-semibold text-[#A0B949] uppercase tracking-wider mb-4">
            Instituto Brasil Mais Sustentável
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-baloo-bold text-[#203226] leading-tight">
            Transformando Ideias em
            <span className="block">Ações Concretas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-baloo-bold text-[#203226]">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-baloo-regular">
                Promover o desenvolvimento sustentável através de projetos inovadores que 
                transformam comunidades e preservam o meio ambiente para as futuras gerações.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-baloo-bold text-[#203226]">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-baloo-regular">
                Ser referência nacional em sustentabilidade, criando um Brasil mais verde, 
                justo e próspero através da colaboração entre sociedade, empresas e governo.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-baloo-bold text-[#203226]">Nossos Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#A0B949] rounded-full"></div>
                  <span className="text-gray-700 font-baloo-medium text-sm sm:text-base">Sustentabilidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#A0B949] rounded-full"></div>
                  <span className="text-gray-700 font-baloo-medium text-sm sm:text-base">Transparência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#A0B949] rounded-full"></div>
                  <span className="text-gray-700 font-baloo-medium text-sm sm:text-base">Inovação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#A0B949] rounded-full"></div>
                  <span className="text-gray-700 font-baloo-medium text-sm sm:text-base">Colaboração</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
            <Image
              src="/forest.jpg"
              alt="Floresta brasileira"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Certifications and Recognition */}
        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-baloo-bold text-[#203226] text-center mb-6 sm:mb-8">
            Certificações e Reconhecimentos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-baloo-bold text-[#203226] mb-2">ISO 14001</h4>
              <p className="text-gray-600 text-sm font-baloo-regular">Certificação em Gestão Ambiental</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="font-baloo-bold text-[#203226] mb-2">Prêmio Nacional</h4>
              <p className="text-gray-600 text-sm font-baloo-regular">Melhor ONG de Sustentabilidade 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-baloo-bold text-[#203226] mb-2">Parceiro Oficial</h4>
              <p className="text-gray-600 text-sm font-baloo-regular">Ministério do Meio Ambiente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
