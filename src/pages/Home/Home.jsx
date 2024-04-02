import PageTitle from '../../components/PageTitle/PageTitle';
import { FaPhoneVolume } from 'react-icons/fa6';
import css from './Home.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <FaPhoneVolume className={css.icon} />
      <PageTitle>Welcome to your contact&apos;s book</PageTitle>
    </div>
  );
}
