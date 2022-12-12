import { Component } from 'react';

export class ContactList extends Component {

  handleChange = (e) => {
    const { id } = e.target;
    this.props.onClick(id)
  }

  render() {
    const contacts = this.props.contacts;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button type="button" id={contact.id} onClick={this.handleChange}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
