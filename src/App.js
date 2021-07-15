import React, { Component } from 'react';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;
