import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({
  title,
  description = 'Раздел в разработке. Скоро здесь появится контент.',
}: PlaceholderPageProps) => (
  <Result
    status="info"
    title={title}
    subTitle={description}
    extra={
      <Link to="/">
        <Button type="primary">Вернуться на дашборд</Button>
      </Link>
    }
  />
);

export default PlaceholderPage;
