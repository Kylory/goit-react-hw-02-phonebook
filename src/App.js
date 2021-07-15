import React, { Component } from 'react';
import Form from './components/Form/Form';
import shortid from 'shortid';
import Contacts from './components/Contacts/Contacts'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const {contacts} = this.state
    this.setState({ name: name, number: number });
    contacts.push({ id:shortid.generate(), name: name, number: number })
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts
          title='Contacts'
          contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
