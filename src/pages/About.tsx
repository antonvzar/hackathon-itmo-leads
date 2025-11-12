export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            О нас
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Мы - команда энтузиастов из ИТМО, которые верят в силу технологий
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Наша миссия
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Мы стремимся создавать инновационные цифровые решения, которые помогают 
                бизнесу расти и развиваться в современном мире.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Наша команда объединяет опыт в разработке, дизайне и маркетинге, 
                чтобы предоставить комплексные решения для наших клиентов.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-lg"></div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Член команды {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Должность
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Краткое описание опыта и навыков
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Инновации', 'Качество', 'Прозрачность', 'Партнерство'].map((value) => (
              <div key={value} className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
