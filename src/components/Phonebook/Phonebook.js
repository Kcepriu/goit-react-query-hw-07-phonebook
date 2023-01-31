import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Button } from './Phonebook.styled';

class Phonebook extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    userName: '',
    number: '',
  };

  // * Events
  reset = () => {
    this.setState({
      userName: '',
      number: '',
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state) && this.reset();
  };

  handleCharge = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.target.value,
    });
  };

  // * Render
  render() {
    const { userName, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="userName">
            Name
            <input
              type="text"
              placeholder="Enter user name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              name="userName"
              value={userName}
              onChange={this.handleCharge}
            />
          </Label>

          <Label htmlFor="numberPhone">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleCharge}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

export default Phonebook;
