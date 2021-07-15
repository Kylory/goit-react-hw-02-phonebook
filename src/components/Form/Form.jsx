import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()
  }
  
  reset = () => {
    this.setState({ name: '',  number: ''});
  }

  render() {
    return (
      <>
        <p>Phonebook</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
