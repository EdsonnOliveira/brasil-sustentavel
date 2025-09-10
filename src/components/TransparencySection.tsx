export default function TransparencySection() {
  const reports = [
    {
      year: "2023",
      title: "Relatório Anual de Atividades",
      description: "Relatório completo das atividades realizadas em 2023, incluindo projetos, impactos e resultados financeiros.",
      downloadUrl: "#",
      size: "2.5 MB"
    },
    {
      year: "2023",
      title: "Demonstrativo Financeiro",
      description: "Demonstrativo financeiro detalhado com receitas, despesas e aplicação dos recursos.",
      downloadUrl: "#",
      size: "1.8 MB"
    },
    {
      year: "2022",
      title: "Relatório de Impacto Ambiental",
      description: "Avaliação do impacto ambiental dos projetos realizados em 2022.",
      downloadUrl: "#",
      size: "3.2 MB"
    },
    {
      year: "2022",
      title: "Relatório de Sustentabilidade",
      description: "Relatório de sustentabilidade com indicadores de performance e metas alcançadas.",
      downloadUrl: "#",
      size: "2.1 MB"
    }
  ];

  const metrics = [
    {
      label: "Transparência",
      value: "100%",
      description: "Todos os relatórios públicos disponíveis"
    },
    {
      label: "Eficiência",
      value: "95%",
      description: "Recursos aplicados diretamente em projetos"
    },
    {
      label: "Conformidade",
      value: "100%",
      description: "Conformidade com regulamentações"
    },
    {
      label: "Auditoria",
      value: "Anual",
      description: "Auditoria externa realizada anualmente"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-sm font-baloo-semibold text-[#A0B949] uppercase tracking-wider mb-4">
            Transparência
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-baloo-bold text-[#203226] leading-tight">
            Prestação de Contas e
            <span className="block">Transparência Total</span>
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-baloo-bold text-[#A0B949] mb-2">
                {metric.value}
              </div>
              <div className="text-base sm:text-lg font-baloo-semibold text-[#203226] mb-1">
                {metric.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-baloo-regular">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Reports Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left side - Reports List */}
          <div>
            <h3 className="text-xl sm:text-2xl font-baloo-bold text-[#203226] mb-6 sm:mb-8">
              Relatórios e Documentos
            </h3>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-[#A0B949] text-white text-xs font-baloo-semibold px-2 py-1 rounded">
                          {report.year}
                        </span>
                        <span className="text-sm text-gray-500 font-baloo-regular">{report.size}</span>
                      </div>
                      <h4 className="font-baloo-semibold text-[#203226] mb-2 text-sm sm:text-base">
                        {report.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-baloo-regular">
                        {report.description}
                      </p>
                    </div>
                    <button className="ml-3 sm:ml-4 bg-[#A0B949] hover:bg-[#8FA83A] text-white p-2 rounded-lg transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Financial Overview */}
          <div>
            <h3 className="text-2xl font-baloo-bold text-[#203226] mb-8">
              Visão Geral Financeira 2023
            </h3>
            
            {/* Financial Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-baloo-semibold text-[#203226] mb-2">
                  Gráfico de Aplicação de Recursos
                </h4>
                <p className="text-gray-600 text-sm font-baloo-regular">
                  Visualização interativa da distribuição dos recursos por categoria
                </p>
              </div>
            </div>

            {/* Financial Breakdown */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-baloo-regular">Projetos Ambientais</span>
                <span className="font-baloo-semibold text-[#203226]">65%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-baloo-regular">Educação e Capacitação</span>
                <span className="font-baloo-semibold text-[#203226]">20%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-baloo-regular">Administração</span>
                <span className="font-baloo-semibold text-[#203226]">10%</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 font-baloo-regular">Captação de Recursos</span>
                <span className="font-baloo-semibold text-[#203226]">5%</span>
              </div>
            </div>

            {/* Total Revenue */}
            <div className="mt-8 p-6 bg-[#A0B949] bg-opacity-10 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-baloo-bold text-[#203226] mb-1">
                  R$ 2.500.000
                </div>
                <div className="text-sm text-gray-600 font-baloo-regular">
                  Total de Recursos Aplicados em 2023
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-baloo-bold text-[#203226] text-center mb-8">
            Certificações e Auditorias
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-baloo-bold text-[#203226] mb-2">Auditoria Externa</h4>
              <p className="text-gray-600 text-sm font-baloo-regular">KPMG - Relatório disponível</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-baloo-bold text-[#203226] mb-2">Certificação OSCIP</h4>
              <p className="text-gray-600 text-sm font-baloo-regular">Organização da Sociedade Civil de Interesse Público</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0B949] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-baloo-bold text-[#203226] mb-2">CNAS</h4>
              <p className="text-gray-600 text-sm font-baloo-regular">Conselho Nacional de Assistência Social</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
