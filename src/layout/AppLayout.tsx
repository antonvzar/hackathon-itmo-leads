import { useEffect, useState } from 'react';
import { Drawer, Grid, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/layout/AppHeader';
import AppSidebar from '../components/layout/AppSidebar';
import styles from './AppLayout.module.css';

const { Content, Sider, Header } = Layout;

const AppLayout = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.lg;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsDrawerOpen(false);
    }
  }, [isMobile]);

  return (
    <Layout className={styles.root}>
      {!isMobile && (
        <Sider width={256} className={styles.sider}>
          <AppSidebar />
        </Sider>
      )}
      <Layout className={styles.mainLayout}>
        <Header className={styles.header}>
          <AppHeader showMenuTrigger={isMobile} onToggleSidebar={() => setIsDrawerOpen(true)} />
        </Header>
        <Content className={styles.content}>
          <div className={styles.contentInner}>
            <Outlet />
          </div>
        </Content>
      </Layout>

      {isMobile && (
        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          placement="left"
          width={280}
          closable={false}
          className={styles.drawer}
        >
          <AppSidebar onNavigate={() => setIsDrawerOpen(false)} />
        </Drawer>
      )}
    </Layout>
  );
};

export default AppLayout;
