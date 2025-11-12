# 🚀 Быстрый старт для интеграции Figma дизайнов

## ✅ Что уже готово

Проект полностью настроен и готов к работе:

- ✅ React + TypeScript + Vite
- ✅ Tailwind CSS для стилизации
- ✅ React Router для навигации
- ✅ 4 страницы с placeholder контентом:
  - Главная (`/`)
  - О нас (`/about`)
  - Услуги (`/services`)
  - Контакты (`/contact`)
- ✅ Компоненты Layout, Navigation, Footer
- ✅ Темная/светлая тема поддержка
- ✅ Responsive дизайн

## 🎯 Следующие шаги (3 минуты до запуска)

### 1. Установите зависимости (1 мин)

```bash
npm install
```

### 2. Запустите dev сервер (30 сек)

```bash
npm run dev
```

Откройте браузер: http://localhost:5173

### 3. Получите доступ к Figma (1 мин)

1. Откройте ваш Figma проект
2. Нажмите на кнопку "Share" в правом верхнем углу
3. Получите ссылку для команды разработчиков
4. Добавьте ссылку в `FIGMA.md` (секция "Получение доступа к дизайнам")

## 📋 Как интегрировать дизайн (пошаговый план)

### Шаг 1: Подготовка (10 мин)

1. **Откройте Figma** и изучите структуру дизайна
2. **Включите Dev Mode** (правый верхний угол)
3. **Экспортируйте шрифты**:
   - Найдите используемые шрифты в Figma
   - Если Google Fonts - добавьте в `index.html`
   - Если кастомные - скачайте и поместите в `public/fonts/`

4. **Создайте цветовую палитру** в `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Скопируйте цвета из Figma
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Шаг 2: Экспорт ресурсов (15 мин)

1. **Изображения**:
   - В Figma выберите изображение
   - Export → PNG/JPG
   - Сохраните в `public/images/`

2. **Иконки**:
   - Export → SVG
   - Сохраните в `public/icons/`

### Шаг 3: Реализация страниц (основная работа)

**Начните с главной страницы:**

1. Откройте `src/pages/Home.tsx`
2. Замените placeholder контент на реальный дизайн
3. Используйте Dev Mode в Figma для копирования стилей

**Пример:**

```tsx
// Было (placeholder):
<h1 className="text-5xl font-bold">
  Добро пожаловать в ITMO Leads
</h1>

// Стало (из Figma):
<h1 className="text-6xl font-bold text-gray-900">
  Ваш заголовок из дизайна
</h1>
```

4. Повторите для остальных страниц:
   - `src/pages/About.tsx`
   - `src/pages/Services.tsx`
   - `src/pages/Contact.tsx`

### Шаг 4: Создание компонентов (опционально)

Если в дизайне есть повторяющиеся элементы (кнопки, карточки и т.д.):

1. Создайте файл в `src/components/`
2. Экспортируйте компонент
3. Используйте в страницах

**Пример кнопки:**

```tsx
// src/components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-blue-600 border-2 border-blue-600";
  
  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}
```

## 🎨 Полезные инструменты

### Figma плагины
- **Figma to Code** - автоматическая генерация кода
- **Design Tokens** - экспорт стилей
- **Content Reel** - тестовый контент

### VS Code расширения
- **Figma for VS Code** - просмотр дизайнов в редакторе
- **Tailwind CSS IntelliSense** - автодополнение классов

### Браузерные расширения
- **PerfectPixel** - наложение макета поверх страницы
- **WhatFont** - определение шрифтов

## 📊 Типичный workflow

```
1. Открыть Figma → Выбрать страницу
2. Экспортировать ресурсы → Сохранить в public/
3. Включить Dev Mode → Скопировать стили
4. Открыть файл страницы → Заменить placeholder
5. npm run dev → Проверить результат
6. Повторить для следующей секции
```

## 🔍 Проверка качества

Перед завершением работы проверьте:

- [ ] Все страницы открываются без ошибок
- [ ] Дизайн соответствует Figma макету
- [ ] Responsive дизайн работает (проверьте на мобильном)
- [ ] Навигация между страницами функционирует
- [ ] Все изображения загружаются
- [ ] Нет console errors в браузере

## 💡 Советы для ускорения работы

1. **Используйте AI помощники**: Скопируйте CSS из Figma Dev Mode и попросите преобразовать в Tailwind классы

2. **Создавайте переиспользуемые компоненты**: Если видите повторяющийся элемент - сразу делайте компонент

3. **Работайте секциями**: Не пытайтесь сделать всю страницу сразу. Делайте по секциям (header → hero → features → footer)

4. **Используйте Tailwind Play**: Тестируйте сложные стили на https://play.tailwindcss.com

5. **Git commits**: Делайте коммиты после каждой завершенной страницы

## 🆘 Если что-то не работает

### Проблема: npm install не работает
```bash
rm -rf node_modules package-lock.json
npm install
```

### Проблема: Tailwind классы не применяются
Проверьте, что файл указан в `tailwind.config.js`:
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Проблема: Изображения не отображаются
Используйте путь от корня:
```tsx
<img src="/images/your-image.jpg" />  // правильно
<img src="images/your-image.jpg" />   // неправильно
```

### Проблема: TypeScript ошибки
Временно можно добавить `// @ts-ignore` над строкой с ошибкой, но лучше исправить типы

## 📚 Дополнительная документация

- Подробная инструкция: [FIGMA.md](./FIGMA.md)
- Основная документация: [README.md](./README.md)
- Tailwind CSS: https://tailwindcss.com/docs
- React Router: https://reactrouter.com

## 🎉 Готово!

Теперь у вас есть полностью настроенный проект, готовый к интеграции Figma дизайнов. 

**Начните с главной страницы и двигайтесь последовательно через все разделы!**

---

Удачи в разработке! 🚀
