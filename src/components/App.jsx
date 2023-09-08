import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = dataForm => {
    this.state.contacts.push({ id: nanoid(), ...dataForm });  
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
        <Form onFormSubmit={this.formSubmitHandler} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
