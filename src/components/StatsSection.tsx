export default function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/forest.jpg)'}}>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-center items-center justify-center flex flex-col">
            <div className="text-gray-800 mb-3 sm:mb-4 font-baloo-bold text-lg sm:text-xl lg:text-2xl">Membros da Equipe</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-baloo-bold bg-gradient-to-r from-[#357550] to-[#8FA83A] bg-clip-text text-transparent">
              100M
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-center items-center justify-center flex flex-col">
            <div className="text-gray-800 mb-3 sm:mb-4 font-baloo-bold text-lg sm:text-xl lg:text-2xl">Famílias Apoiadas</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-baloo-bold bg-gradient-to-r from-[#357550] to-[#8FA83A] bg-clip-text text-transparent">
              5,6k
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-center items-center justify-center flex flex-col">
            <div className="text-gray-800 mb-3 sm:mb-4 font-baloo-bold text-lg sm:text-xl lg:text-2xl">Projetos Completos</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-baloo-bold bg-gradient-to-r from-[#203226] to-[#8FA83A] bg-clip-text text-transparent">
              130+
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-center items-center justify-center flex flex-col">
            <div className="text-gray-800 mb-3 sm:mb-4 font-baloo-bold text-lg sm:text-xl lg:text-2xl">Prêmios Conquistados</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-baloo-bold bg-gradient-to-r from-[#357550] to-[#8FA83A] bg-clip-text text-transparent">
              400+
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-center items-center justify-center flex flex-col">
            <div className="text-gray-800 mb-3 sm:mb-4 font-baloo-bold text-lg sm:text-xl lg:text-2xl">Projetos Ativos</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-baloo-bold bg-gradient-to-r from-[#357550] to-[#8FA83A] bg-clip-text text-transparent">
              95%
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-center items-center justify-center flex flex-col">
            <div className="text-gray-800 mb-3 sm:mb-4 font-baloo-bold text-lg sm:text-xl lg:text-2xl">Dias de Ajuda</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-baloo-bold bg-gradient-to-r from-[#357550] to-[#8FA83A] bg-clip-text text-transparent">
              450+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
