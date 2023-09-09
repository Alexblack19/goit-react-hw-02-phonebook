import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = dataForm => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), ...dataForm }],
    }));    
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          color: '#010101',
        }}
      >
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
