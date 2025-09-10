import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Reflorestamento da Mata Atlântica",
      location: "São Paulo, SP",
      description: "Projeto de reflorestamento que recuperou 500 hectares de Mata Atlântica, plantando mais de 100.000 árvores nativas.",
      impact: "50.000 toneladas de CO₂ capturadas",
      image: "/forest.jpg",
      status: "Concluído"
    },
    {
      id: 2,
      title: "Energia Solar Comunitária",
      location: "Bahia, BA",
      description: "Instalação de painéis solares em 200 residências de baixa renda, proporcionando energia limpa e redução de custos.",
      impact: "200 famílias beneficiadas",
      image: "/eco.jpg",
      status: "Em andamento"
    },
    {
      id: 3,
      title: "Gestão de Resíduos Urbanos",
      location: "Rio de Janeiro, RJ",
      description: "Implementação de sistema de coleta seletiva e compostagem em 5 bairros, reduzindo lixo em 70%.",
      impact: "70% redução de resíduos",
      image: "/plant-hands.jpg",
      status: "Concluído"
    },
    {
      id: 4,
      title: "Educação Ambiental Rural",
      location: "Minas Gerais, MG",
      description: "Programa de capacitação em práticas sustentáveis para 500 agricultores familiares.",
      impact: "500 agricultores capacitados",
      image: "/eco.jpg",
      status: "Em andamento"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-baloo-semibold text-[#A0B949] uppercase tracking-wider mb-4">
            Nossos Projetos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-baloo-bold text-[#203226] leading-tight">
            Transformando Comunidades
            <span className="block">Através da Sustentabilidade</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 sm:h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-baloo-semibold ${
                    project.status === 'Concluído' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-4 h-4 text-[#A0B949]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-600 font-baloo-regular">{project.location}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-baloo-bold text-[#203226] mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base font-baloo-regular">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#A0B949]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-baloo-semibold text-[#A0B949]">
                    {project.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
