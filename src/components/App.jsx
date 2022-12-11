import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const phoneList = [
  { id: 123, name: 'Eden Clements', number: '645-17-79' },
  { id: 456, name: 'Hermione Kline', number: '443-89-12' },
  { id: 789, name: 'Rosie Simpson', number: '459-12-56' },
];

export class App extends Component {
  state = {
    contacts: phoneList,
  };

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm onSubmit={values => this.handleSubmit(values)} />
        <h2>Contacts </h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
