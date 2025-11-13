import { useMemo, useState } from 'react';
import { message, Pagination, Typography } from 'antd';
import LeadCard from '../../components/leads/LeadCard';
import type { Lead } from '../../components/leads/LeadCard';
import LeadFilters from '../../components/leads/LeadFilters';
import type { LeadFiltersState } from '../../components/leads/LeadFilters';
import LeadsToolbar from '../../components/leads/LeadsToolbar';
import type { LeadViewMode } from '../../components/leads/LeadsToolbar';
import styles from '../../components/leads/LeadsShared.module.css';

const leadsData: Lead[] = [
  {
    id: 'lead-1',
    city: 'Москва',
    dealType: 'Продажа',
    propertyType: 'Квартира',
    budgetLabel: '15-20 млн ₽',
    budgetMin: 15000000,
    budgetMax: 20000000,
    rooms: 3,
    source: 'Циан',
    name: 'Иван П.',
    phone: '+7 916 ***-**-12',
    email: 'ivan.p@example.ru',
    quality: 92,
    exclusive: true,
    contactCost: 50,
    comment: 'Ищет квартиру у метро в пределах СЗАО.',
    freshness: 1,
  },
  {
    id: 'lead-2',
    city: 'Санкт-Петербург',
    dealType: 'Аренда',
    propertyType: 'Дом',
    budgetLabel: '80-100 тыс ₽',
    budgetMin: 80000,
    budgetMax: 100000,
    rooms: '5+',
    source: 'Avito',
    name: 'Мария К.',
    phone: '+7 921 ***-**-45',
    email: 'maria.kz@example.com',
    quality: 78,
    contactCost: 35,
    comment: 'Дом для большой семьи, важен участок от 6 соток.',
    freshness: 3,
  },
  {
    id: 'lead-3',
    city: 'Москва',
    dealType: 'Покупка',
    propertyType: 'Квартира',
    budgetLabel: '8-10 млн ₽',
    budgetMin: 8000000,
    budgetMax: 10000000,
    rooms: 1,
    source: 'Звонок',
    name: 'Алексей С.',
    phone: '+7 905 ***-**-99',
    email: 'a.serg@example.ru',
    quality: 45,
    contactCost: 15,
    freshness: 6,
  },
  {
    id: 'lead-4',
    city: 'Москва',
    dealType: 'Продажа',
    propertyType: 'Дом',
    budgetLabel: '35-40 млн ₽',
    budgetMin: 35000000,
    budgetMax: 40000000,
    rooms: '5+',
    source: 'Inhouse',
    name: 'Игорь Д.',
    phone: '+7 925 ***-**-08',
    email: 'igor.d@example.ru',
    quality: 88,
    exclusive: true,
    contactCost: 60,
    comment: 'Современный дом в Новой Москве, строительство 2021 г.',
    freshness: 2,
  },
  {
    id: 'lead-5',
    city: 'Новосибирск',
    dealType: 'Покупка',
    propertyType: 'Апартаменты',
    budgetLabel: '6-7 млн ₽',
    budgetMin: 6000000,
    budgetMax: 7000000,
    rooms: 2,
    source: 'Циан',
    name: 'Екатерина Л.',
    phone: '+7 913 ***-**-31',
    email: 'katya.l@example.ru',
    quality: 63,
    contactCost: 20,
    freshness: 4,
  },
  {
    id: 'lead-6',
    city: 'Казань',
    dealType: 'Аренда',
    propertyType: 'Квартира',
    budgetLabel: '60-70 тыс ₽',
    budgetMin: 60000,
    budgetMax: 70000,
    rooms: 3,
    source: 'Авито',
    name: 'Дмитрий О.',
    phone: '+7 987 ***-**-77',
    email: 'dmitry.o@example.ru',
    quality: 70,
    contactCost: 25,
    comment: 'Ищет в центре с парковкой и мебелью.',
    freshness: 5,
  },
  {
    id: 'lead-7',
    city: 'Краснодар',
    dealType: 'Продажа',
    propertyType: 'Таунхаус',
    budgetLabel: '12-14 млн ₽',
    budgetMin: 12000000,
    budgetMax: 14000000,
    rooms: '5+',
    source: 'Циан',
    name: 'Юлия В.',
    phone: '+7 918 ***-**-23',
    email: 'yulia.v@example.ru',
    quality: 81,
    exclusive: true,
    contactCost: 40,
    freshness: 7,
  },
  {
    id: 'lead-8',
    city: 'Москва',
    dealType: 'Аренда',
    propertyType: 'Квартира',
    budgetLabel: '120-150 тыс ₽',
    budgetMin: 120000,
    budgetMax: 150000,
    rooms: 4,
    source: 'Realtor',
    name: 'Станислав Г.',
    phone: '+7 903 ***-**-66',
    email: 'stanislav.g@example.ru',
    quality: 84,
    contactCost: 55,
    freshness: 1,
  },
  {
    id: 'lead-9',
    city: 'Санкт-Петербург',
    dealType: 'Покупка',
    propertyType: 'Квартира',
    budgetLabel: '18-22 млн ₽',
    budgetMin: 18000000,
    budgetMax: 22000000,
    rooms: 4,
    source: 'Циан',
    name: 'Наталья П.',
    phone: '+7 921 ***-**-47',
    email: 'natalya.p@example.ru',
    quality: 86,
    contactCost: 48,
    freshness: 2,
  },
  {
    id: 'lead-10',
    city: 'Казань',
    dealType: 'Покупка',
    propertyType: 'Коммерческая недвижимость',
    budgetLabel: '25-30 млн ₽',
    budgetMin: 25000000,
    budgetMax: 30000000,
    rooms: '5+',
    source: 'Inhouse',
    name: 'Рустам Х.',
    phone: '+7 987 ***-**-55',
    email: 'rustam.h@example.ru',
    quality: 74,
    comment: 'Нужен отдельный вход и место для вывески.',
    freshness: 8,
  },
  {
    id: 'lead-11',
    city: 'Новосибирск',
    dealType: 'Аренда',
    propertyType: 'Квартира',
    budgetLabel: '45-55 тыс ₽',
    budgetMin: 45000,
    budgetMax: 55000,
    rooms: 2,
    source: 'Авито',
    name: 'Ирина С.',
    phone: '+7 913 ***-**-12',
    email: 'irina.s@example.ru',
    quality: 58,
    contactCost: 18,
    freshness: 6,
  },
  {
    id: 'lead-12',
    city: 'Краснодар',
    dealType: 'Покупка',
    propertyType: 'Дом',
    budgetLabel: '20-23 млн ₽',
    budgetMin: 20000000,
    budgetMax: 23000000,
    rooms: '5+',
    source: 'Realtor',
    name: 'Сергей Н.',
    phone: '+7 918 ***-**-90',
    email: 'sergey.n@example.ru',
    quality: 68,
    contactCost: 32,
    freshness: 9,
  },
  {
    id: 'lead-13',
    city: 'Москва',
    dealType: 'Продажа',
    propertyType: 'Апартаменты',
    budgetLabel: '22-25 млн ₽',
    budgetMin: 22000000,
    budgetMax: 25000000,
    rooms: 2,
    source: 'Циан',
    name: 'Анна К.',
    phone: '+7 916 ***-**-77',
    email: 'anna.k@example.ru',
    quality: 90,
    exclusive: true,
    contactCost: 52,
    freshness: 3,
  },
  {
    id: 'lead-14',
    city: 'Санкт-Петербург',
    dealType: 'Продажа',
    propertyType: 'Комната',
    budgetLabel: '4-4.5 млн ₽',
    budgetMin: 4000000,
    budgetMax: 4500000,
    rooms: 1,
    source: 'Авито',
    name: 'Ольга Ф.',
    phone: '+7 911 ***-**-22',
    email: 'olga.f@example.ru',
    quality: 52,
    contactCost: 12,
    freshness: 10,
  },
  {
    id: 'lead-15',
    city: 'Москва',
    dealType: 'Аренда',
    propertyType: 'Коммерческая недвижимость',
    budgetLabel: '250-280 тыс ₽',
    budgetMin: 250000,
    budgetMax: 280000,
    rooms: '5+',
    source: 'Inhouse',
    name: 'Борис Е.',
    phone: '+7 903 ***-**-44',
    email: 'boris.e@example.ru',
    quality: 82,
    contactCost: 65,
    freshness: 2,
  },
];

const defaultFilters: LeadFiltersState = {
  city: null,
  dealType: null,
  propertyType: null,
  budgetFrom: undefined,
  budgetTo: undefined,
  rooms: undefined,
  quality: 50,
  exclusive: false,
};

const pageSize = 6;

const LeadsMarketplacePage = () => {
  const [filters, setFilters] = useState<LeadFiltersState>(defaultFilters);
  const [sort, setSort] = useState('fresh');
  const [viewMode, setViewMode] = useState<LeadViewMode>('list');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filteredLeads = useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    return leadsData.filter((lead) => {
      if (filters.city && lead.city !== filters.city) {
        return false;
      }
      if (filters.dealType && lead.dealType !== filters.dealType) {
        return false;
      }
      if (filters.propertyType && lead.propertyType !== filters.propertyType) {
        return false;
      }
      if (typeof filters.rooms !== 'undefined' && filters.rooms !== null) {
        if (filters.rooms === '4+') {
          const rooms = typeof lead.rooms === 'number' ? lead.rooms : 5;
          if (rooms < 4) return false;
        } else if (typeof filters.rooms === 'number') {
          const rooms = typeof lead.rooms === 'number' ? lead.rooms : 5;
          if (rooms !== filters.rooms) return false;
        }
      }
      if (filters.budgetFrom && (lead.budgetMax ?? lead.budgetMin ?? 0) < filters.budgetFrom) {
        return false;
      }
      if (filters.budgetTo && (lead.budgetMin ?? lead.budgetMax ?? 0) > filters.budgetTo) {
        return false;
      }
      if (lead.quality < filters.quality) {
        return false;
      }
      if (filters.exclusive && !lead.exclusive) {
        return false;
      }
      if (searchValue) {
        const haystack = [
          lead.city,
          lead.dealType,
          lead.propertyType,
          lead.name,
          lead.source,
          lead.comment,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(searchValue)) {
          return false;
        }
      }
      return true;
    });
  }, [filters, search]);

  const sortedLeads = useMemo(() => {
    const leads = [...filteredLeads];
    switch (sort) {
      case 'budget-desc':
        leads.sort(
          (a, b) =>
            (b.budgetMax ?? b.budgetMin ?? 0) -
            (a.budgetMax ?? a.budgetMin ?? 0),
        );
        break;
      case 'budget-asc':
        leads.sort(
          (a, b) =>
            (a.budgetMin ?? a.budgetMax ?? 0) -
            (b.budgetMin ?? b.budgetMax ?? 0),
        );
        break;
      case 'quality':
        leads.sort((a, b) => b.quality - a.quality);
        break;
      case 'fresh':
      default:
        leads.sort((a, b) => a.freshness - b.freshness);
    }
    return leads;
  }, [filteredLeads, sort]);

  const paginatedLeads = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedLeads.slice(start, start + pageSize);
  }, [sortedLeads, page]);

  const handleOpenContacts = () => {
    message.success('Контакты раскрыты в демо-режиме');
  };

  const handleBookmark = () => {
    message.success('Лид добавлен в избранное');
  };

  return (
    <div className={styles.column}>
      <div className={styles.layout}>
        <LeadFilters value={filters} onChange={(nextFilters) => {
          setFilters(nextFilters);
          setPage(1);
        }} />

        <div className={styles.column}>
          <div className={styles.listHeader}>
            <LeadsToolbar
              total={leadsData.length}
              filtered={sortedLeads.length}
              sort={sort}
              onSortChange={(value) => {
                setSort(value);
                setPage(1);
              }}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onSearch={(value) => {
                setSearch(value);
                setPage(1);
              }}
              initialSearch={search}
            />
          </div>

          <div className={viewMode === 'grid' ? styles.gridList : styles.cardList}>
            {paginatedLeads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onOpenContacts={handleOpenContacts}
                onBookmark={handleBookmark}
              />
            ))}
            {paginatedLeads.length === 0 && (
              <Typography.Text type="secondary">
                Нет лидов, удовлетворяющих выбранным фильтрам.
              </Typography.Text>
            )}
          </div>

          <div className={styles.pagination}>
            <span>
              Показано{' '}
              {paginatedLeads.length
                ? `${(page - 1) * pageSize + 1}–${(page - 1) * pageSize + paginatedLeads.length}`
                : 0}{' '}
              из {sortedLeads.length.toLocaleString('ru-RU')} результатов
            </span>
            <Pagination
              current={page}
              pageSize={pageSize}
              total={sortedLeads.length}
              onChange={setPage}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsMarketplacePage;
