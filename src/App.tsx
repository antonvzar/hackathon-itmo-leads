import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import MyObjectsPage from './pages/my-objects/MyObjectsPage';
import PlaceholderPage from './pages/PlaceholderPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: 'my-objects',
        element: <MyObjectsPage />,
      },
      {
        path: 'leads-catalog',
        element: <PlaceholderPage title="Каталог лидов" />,
      },
      {
        path: 'deals',
        element: <PlaceholderPage title="Сделки" />,
      },
      {
        path: 'finance',
        element: <PlaceholderPage title="Финансы" />,
      },
      {
        path: '*',
        element: <PlaceholderPage title="Страница не найдена" description="Похоже, вы перешли по несуществующему адресу." />,
      },
    ],
  },
]);

const App = () => (
  <ConfigProvider
    locale={ruRU}
    theme={{
      token: {
        colorPrimary: '#1F71FF',
        fontFamily: "'Inter', sans-serif",
        borderRadius: 8,
      },
      components: {
        Layout: {
          bodyBg: '#F5F6F8',
          headerBg: '#FFFFFF',
          siderBg: '#FFFFFF',
        },
        Menu: {
          itemBorderRadius: 8,
          itemSelectedBg: 'rgba(31, 113, 255, 0.10)',
          itemHoverBg: 'rgba(31, 113, 255, 0.08)',
          itemSelectedColor: '#1F71FF',
        },
        Button: {
          fontWeight: 600,
        },
        Card: {
          borderRadiusLG: 12,
        },
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);

export default App;
