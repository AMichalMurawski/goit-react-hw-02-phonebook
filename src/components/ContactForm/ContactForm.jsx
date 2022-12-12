import { Component } from 'react';
import { nanoid } from 'nanoid';

const initialValue = { name: 'Rosie Simpson', number: '1313123123' };

export class ContactForm extends Component {
  state = { ...initialValue };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const id = nanoid();
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ id, name, number });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...initialValue });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          gap: 15,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
        }}
      >
        <label htmlFor="contact_name">Name</label>
        <input
          type="text"
          name="name"
          id="contact_name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="contact_number">Number</label>
        <input
          type="tel"
          name="number"
          id="contact_number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
