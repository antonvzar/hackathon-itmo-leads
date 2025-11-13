import { useEffect } from 'react';
import { Checkbox, Form, InputNumber, Segmented, Select, Slider, Typography } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from './LeadsShared.module.css';

export interface LeadFiltersState {
  city: string | null;
  dealType: string | null;
  propertyType: string | null;
  budgetFrom?: number;
  budgetTo?: number;
  rooms?: number | '4+';
  quality: number;
  exclusive: boolean;
}

interface LeadFiltersProps {
  value: LeadFiltersState;
  onChange: (next: LeadFiltersState) => void;
}

const cityOptions = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Краснодар', 'Казань'];
const dealOptions = ['Продажа', 'Покупка', 'Аренда'];
const propertyOptions = ['Квартира', 'Дом', 'Апартаменты', 'Комната', 'Коммерческая недвижимость'];
const roomOptions: Array<number | '4+'> = [1, 2, 3, '4+'];

const LeadFilters = ({ value, onChange }: LeadFiltersProps) => {
  const [form] = Form.useForm<LeadFiltersState>();

  useEffect(() => {
    form.setFieldsValue(value);
  }, [form, value]);

  const updateField = (field: keyof LeadFiltersState, fieldValue: LeadFiltersState[keyof LeadFiltersState]) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  const handleCheckbox = (event: CheckboxChangeEvent) => {
    updateField('exclusive', event.target.checked);
  };

  return (
    <div className={styles.filterPanel}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        Фильтры
      </Typography.Title>
      <Form
        form={form}
        layout="vertical"
        initialValues={value}
        className={styles.filterGroup}
        onValuesChange={(_, allValues) => {
          onChange({ ...value, ...allValues });
        }}
      >
        <Form.Item label="Город" name="city" className={styles.filterItem}>
          <Select
            placeholder="Выберите"
            options={cityOptions.map((city) => ({ value: city, label: city }))}
            allowClear
          />
        </Form.Item>

        <Form.Item label="Тип сделки" name="dealType" className={styles.filterItem}>
          <Select
            placeholder="Выберите"
            options={dealOptions.map((option) => ({ value: option, label: option }))}
            allowClear
          />
        </Form.Item>

        <Form.Item label="Тип объекта" name="propertyType" className={styles.filterItem}>
          <Select
            placeholder="Выберите"
            options={propertyOptions.map((option) => ({ value: option, label: option }))}
            allowClear
          />
        </Form.Item>

        <div className={styles.filterItem}>
          <span className={styles.filterLabel}>Бюджет, ₽</span>
          <div className={styles.rangeInputs}>
            <InputNumber
              placeholder="от"
              min={0}
              value={value.budgetFrom}
              onChange={(val) => updateField('budgetFrom', val ?? undefined)}
            />
            <InputNumber
              placeholder="до"
              min={0}
              value={value.budgetTo}
              onChange={(val) => updateField('budgetTo', val ?? undefined)}
            />
          </div>
        </div>

        <div className={styles.filterItem}>
          <span className={styles.filterLabel}>Комнаты</span>
          <Segmented
            options={roomOptions.map((option) => ({
              label: option.toString(),
              value: option,
            }))}
            value={value.rooms ?? null}
            onChange={(val) => updateField('rooms', val as LeadFiltersState['rooms'])}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.filterLabel}>Качество</span>
          <Slider
            min={0}
            max={100}
            marks={{ 0: '0%', 50: '50%', 100: '100%' }}
            value={value.quality}
            onChange={(val) => updateField('quality', val)}
          />
        </div>

        <Checkbox checked={value.exclusive} onChange={handleCheckbox}>
          Эксклюзив
        </Checkbox>
      </Form>
    </div>
  );
};

export default LeadFilters;
