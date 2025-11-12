export default function Services() {
  const services = [
    {
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с использованием React, TypeScript и других передовых технологий',
      features: ['Адаптивный дизайн', 'SEO-оптимизация', 'Высокая производительность']
    },
    {
      title: 'Мобильная разработка',
      description: 'Разработка нативных и кросс-платформенных мобильных приложений для iOS и Android',
      features: ['React Native', 'Нативная производительность', 'Единая кодовая база']
    },
    {
      title: 'UI/UX Дизайн',
      description: 'Создание интуитивных и привлекательных пользовательских интерфейсов',
      features: ['Исследование пользователей', 'Прототипирование', 'Тестирование юзабилити']
    },
    {
      title: 'Консалтинг',
      description: 'Помощь в выборе технологического стека и архитектуры проекта',
      features: ['Анализ требований', 'Техническая экспертиза', 'Оценка проекта']
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Полный спектр услуг для создания вашего цифрового продукта
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Процесс работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Анализ', desc: 'Изучаем ваши требования' },
              { step: '2', title: 'Дизайн', desc: 'Создаем прототипы' },
              { step: '3', title: 'Разработка', desc: 'Пишем код' },
              { step: '4', title: 'Запуск', desc: 'Деплоим проект' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Заинтересованы в сотрудничестве?
          </h2>
          <p className="text-xl text-white mb-8">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Начать проект
          </button>
        </div>
      </div>
    </div>
  )
}
