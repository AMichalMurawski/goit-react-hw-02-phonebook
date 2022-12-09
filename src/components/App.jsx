import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      number: ''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(value) {
    console.log(value)
  }

  render() {
    const {contacts} = this.state
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm onSubmit={values => this.handleSubmit(values)} />
        <h2>Contacts </h2>
        <ContactList contacts={contacts}/>
      </div>
    );
  }
};
