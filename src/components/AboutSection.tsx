import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Panel - Image */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 lg:h-full order-1 lg:order-1">
            <Image
              src="/plant-hands.jpg"
              alt="Mãos segurando uma planta"
              fill
              className="object-cover"
            />
          </div>

          {/* Central Panel - Content */}
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 flex flex-col justify-center relative order-2 lg:order-2">
            <div className="space-y-6 sm:space-y-8 text-center">
              {/* About text */}
              <div className="text-xs font-baloo-medium text-gray-500 uppercase tracking-widest">
                Sobre Nós
              </div>

              {/* Main heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-baloo-light text-[#203226] leading-tight">
                <span className="block">Ambiente</span>
                <span className="block">Sustentável</span>
                <span className="block">Futuro Verde</span>
                <span className="block">Para Sempre</span>
              </h2>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-md mx-auto font-baloo-regular">
                Ao lado das comunidades, estamos urgentemente removendo obstáculos e encontrando soluções para as crises climáticas e de biodiversidade.
              </p>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 lg:h-full order-3 lg:order-3">
            <Image
              src="/eco.jpg"
              alt="Jovem segurando uma planta"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
