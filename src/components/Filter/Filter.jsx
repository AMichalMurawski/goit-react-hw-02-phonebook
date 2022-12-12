import { Component } from "react"


export class Filter extends Component {

    handleChange = (e) => {
        const { value } = e.target;
        this.props.handleChange(value);
    };

    render() {
        const { filter } = this.props;
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
                <label htmlFor="contact_filter">Find contacts by name</label>
                <input
                    type="text"
                    name="name"
                    id="contact_filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={filter}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}