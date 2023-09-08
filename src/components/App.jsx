import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';

export class App extends Component {
  nameInputId = nanoid();

  state = {
    contacts: [],
    name: '',
  };

  handleChange(e) {
    console.log('Hello');
  }

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
          nameInputId={this.nameInputId}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
