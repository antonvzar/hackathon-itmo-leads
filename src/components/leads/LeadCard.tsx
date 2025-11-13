import { Button, Space, Tooltip, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import styles from './LeadsShared.module.css';

export interface Lead {
  id: string;
  city: string;
  region?: string;
  dealType: string;
  propertyType: string;
  budgetLabel: string;
  budgetMin?: number;
  budgetMax?: number;
  rooms: number | '5+';
  source: string;
  name: string;
  phone: string;
  email: string;
  quality: number;
  exclusive?: boolean;
  contactCost?: number;
  comment?: string;
  freshness: number;
}

interface LeadCardProps {
  lead: Lead;
  onOpenContacts?: (lead: Lead) => void;
  onBookmark?: (lead: Lead) => void;
}

const getQualityBadgeClass = (quality: number) => {
  if (quality >= 85) {
    return `${styles.qualityBadge} ${styles.tagHighlight}`;
  }
  if (quality >= 65) {
    return `${styles.qualityBadge} ${styles.tagWarning}`;
  }
  return `${styles.qualityBadge} ${styles.tagDanger}`;
};

const LeadCard = ({ lead, onOpenContacts, onBookmark }: LeadCardProps) => (
  <div className={styles.leadCard}>
    <div className={styles.cardHeader}>
      <div className={styles.cardTitle}>
        <span>
          {lead.city}
          {lead.region ? `, ${lead.region}` : ''} · {lead.dealType} · {lead.propertyType}
        </span>
        {lead.exclusive && <span className={`${styles.tagNeutral} ${styles.tagHighlight}`}>Эксклюзив</span>}
      </div>
      <span className={getQualityBadgeClass(lead.quality)}>{lead.quality}%</span>
    </div>

    <div className={styles.cardTags}>
      <span className={`${styles.tagNeutral} ${styles.tagHighlight}`}>Бюджет: {lead.budgetLabel}</span>
      <span className={styles.tagNeutral}>Комнат: {lead.rooms}</span>
      <span className={styles.tagNeutral}>Источник: {lead.source}</span>
    </div>

    <div className={styles.cardBody}>
      <div className={styles.contactInfo}>
        <Space align="center" size={8}>
          <UserOutlined style={{ color: '#6b778c' }} />
          <Typography.Text>{lead.name}</Typography.Text>
        </Space>
        <Space align="center" size={8}>
          <PhoneOutlined style={{ color: '#6b778c' }} />
          <Typography.Text>{lead.phone}</Typography.Text>
        </Space>
        <Space align="center" size={8}>
          <MailOutlined style={{ color: '#6b778c' }} />
          <Typography.Text className={styles.contactSecondary}>{lead.email}</Typography.Text>
        </Space>
      </div>
      {lead.comment && (
        <Typography.Paragraph style={{ margin: 0 }} type="secondary">
          {lead.comment}
        </Typography.Paragraph>
      )}
    </div>

    <div className={styles.cardFooter}>
      <Button
        type="primary"
        size="large"
        className={styles.ctaButton}
        onClick={() => onOpenContacts?.(lead)}
      >
        Открыть контакты
      </Button>
      <div className={styles.secondaryRow}>
        {typeof lead.contactCost === 'number' && (
          <span className={styles.metaRow}>Стоимость раскрытия: {lead.contactCost} кр.</span>
        )}
        <Tooltip title="Сохранить лид">
          <Button
            shape="circle"
            icon={<StarOutlined />}
            onClick={() => onBookmark?.(lead)}
          />
        </Tooltip>
      </div>
    </div>
  </div>
);

export default LeadCard;
