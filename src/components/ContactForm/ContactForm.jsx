import { Component } from "react";


export class ContactForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        this.props.onSubmit({ name, number });
        form.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}
                style={{
                    display: 'flex',
                    gap: 15,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                }}
            >
                <label for="contact_name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="contact_name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label for="contact_number">Number</label>
                <input
                    type="tel"
                    name="number"
                    id="contact_number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}