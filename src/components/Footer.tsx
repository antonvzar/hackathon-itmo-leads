export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ITMO Leads</h3>
            <p className="text-gray-400">
              Инновационные решения для вашего бизнеса
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Главная</a></li>
              <li><a href="/about" className="hover:text-white">О нас</a></li>
              <li><a href="/services" className="hover:text-white">Услуги</a></li>
              <li><a href="/contact" className="hover:text-white">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@itmoleads.ru</li>
              <li>Тел: +7 (XXX) XXX-XX-XX</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 ITMO Leads. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
