import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',    
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({      
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();   
    this.props.onFormSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            placeholder="Enter name"
            type="text"
            name="name"
            value={this.state.name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            placeholder="+(380) XXX XXX XXX"
            name="number"
            value={this.state.number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}