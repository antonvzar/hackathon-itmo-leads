import { useState } from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Input, Segmented, Select, Space, Typography } from 'antd';
import styles from './LeadsShared.module.css';

const { Search } = Input;

export type LeadViewMode = 'list' | 'grid';

interface LeadsToolbarProps {
  total: number;
  filtered: number;
  sort: string;
  onSortChange: (value: string) => void;
  viewMode: LeadViewMode;
  onViewModeChange: (mode: LeadViewMode) => void;
  onSearch?: (value: string) => void;
  initialSearch?: string;
}

const sortOptions = [
  { value: 'fresh', label: 'по свежести' },
  { value: 'budget-desc', label: 'по бюджету (убыв.)' },
  { value: 'budget-asc', label: 'по бюджету (возр.)' },
  { value: 'quality', label: 'по качеству' },
];

const LeadsToolbar = ({
  total,
  filtered,
  sort,
  onSortChange,
  viewMode,
  onViewModeChange,
  onSearch,
  initialSearch,
}: LeadsToolbarProps) => {
  const [searchValue, setSearchValue] = useState(initialSearch ?? '');

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarStats}>
        <Typography.Text className={styles.toolbarTitle}>
          Найдено {filtered.toLocaleString('ru-RU')} лида
        </Typography.Text>
        {filtered !== total && (
          <Typography.Text className={styles.toolbarMeta}>
            Показано {filtered.toLocaleString('ru-RU')} из {total.toLocaleString('ru-RU')} результатов
          </Typography.Text>
        )}
      </div>
      <Space size={12} className={styles.toolbarActions} wrap>
        {onSearch && (
          <Search
            allowClear
            placeholder="Поиск по адресу или описанию..."
            value={searchValue}
            onChange={(event) => {
              const value = event.target.value;
              setSearchValue(value);
              onSearch(value);
            }}
            style={{ width: 280 }}
          />
        )}
        <Select
          value={sort}
          options={sortOptions}
          onChange={onSortChange}
          style={{ width: 180 }}
        />
        <Segmented
          value={viewMode}
          onChange={(value) => onViewModeChange(value as LeadViewMode)}
          className={styles.viewToggle}
          options={[
            { value: 'list', icon: <BarsOutlined /> },
            { value: 'grid', icon: <AppstoreOutlined /> },
          ]}
        />
      </Space>
    </div>
  );
};

export default LeadsToolbar;
