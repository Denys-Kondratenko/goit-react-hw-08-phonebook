import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
// import { GlobalStyle } from 'components/GlobalStyle';
import { Section } from 'components/Section/Section';

const Contacts = () => {
  return (
    <>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section firstTitle="Contacts">
        <Contact>
          <Filter />
        </Contact>
      </Section>
      {/* <GlobalStyle /> */}
    </>
  );
};

export default Contacts;
