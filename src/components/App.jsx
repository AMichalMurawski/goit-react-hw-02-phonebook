import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const phoneList = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

export class App extends Component {
  state = {
    contacts: phoneList,
    filter: "",
  };

  handleSubmit = contact => {
    const { contacts } = this.state;
    if (
      contacts.find(value => value.name.toLowerCase().replace(/\s/g, "")
        === contact.name.toLowerCase().replace(/\s/g, ""))) {
      alert(`${contact.name} is already in contacts.`)
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = value => {
     this.setState(prevState => ({
      filter: value,
    }));
  }

  render() {
    const { contacts, filter } = this.state;
    let contactList = [];
    if (filter.length > 0) {
      contactList = contacts.filter((contact, index, array) => {
        return contact.name.toLowerCase().replace(/\s/g, "").includes(filter.toLowerCase().replace(/\s/g, ""))
      })
    } else {
      contactList = contacts
    }

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
        <Filter filter={filter} handleChange={value => this.changeFilter(value)} />
        <ContactList contacts={contactList} />
      </div>
    );
  }
}
