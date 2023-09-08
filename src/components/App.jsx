import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';

export class App extends Component {
  contactId = nanoid();

  state = {
    contacts: [],
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
        <FormPhonebook
          contactId={this.contactId}
          name={this.state.name}
          number={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
