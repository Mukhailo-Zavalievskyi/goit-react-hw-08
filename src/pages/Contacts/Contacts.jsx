import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function Contacts() {
  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
