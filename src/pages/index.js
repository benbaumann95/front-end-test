import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SuccessMessage from '../components/SuccessMessage';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      buttonClicked: false,
      validation: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validate = () => {
    var validation = {};
    if (this.state.firstname === '') {
      validation.firstname = 'Please provide a first name';
    }
    if (this.state.lastname === '') {
      validation.lastname = 'Please provide a last name';
    }
    if (this.state.email === '') {
      validation.email = 'Please provide an email';
    }
    if (this.state.message === '') {
      validation.message = 'Please provide a message';
    }

    this.setState({ validation });
    return Object.keys(validation).length === 0;
  };

  handleClick() {
    if (this.validate()) {
      this.setState({
        buttonClicked: true
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!this.validate()) {
      console.log({ q: 'failed validation', event, state: this.state });
    } else {
      console.log({ q: 'successfully submitted', event, state: this.state });
    }
  };

  handleFirstnameChange = event => {
    this.setState({ firstname: event.target.value });
  };

  handleLastnameChange = event => {
    this.setState({ lastname: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div className="contact-form-container">
        <h1 className="contact-form-header">Get in Touch!</h1>
        <form onSubmit={this.handleSubmit && this.handleClick} className="form">
          <label htmlFor="firstname" className="form-label">
            First name
          </label>

          <TextField
            name={'firstname'}
            onChange={this.handleFirstnameChange}
            value={this.state.firstname}
          />
          {this.state.validation.firstname ? (
            <p className={'validation-fail'}>
              {this.state.validation.firstname}
            </p>
          ) : null}

          <label htmlFor="lastname" className="form-label">
            Last name
          </label>
          <TextField
            name={'lastname'}
            onChange={this.handleLastnameChange}
            value={this.state.lastname}
          />
          {this.state.validation.lastname ? (
            <p className={'validation-fail'}>
              {this.state.validation.lastname}
            </p>
          ) : null}

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <TextField
            name={'email'}
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          {this.state.validation.email ? (
            <p className={'validation-fail'}>{this.state.validation.email}</p>
          ) : null}

          <label htmlFor="message" className="form-label">
            Leave a message
          </label>
          <TextField
            name={'message'}
            onChange={this.handleMessageChange}
            value={this.state.message}
            className="margin-bottom-20"
          />
          {this.state.validation.message ? (
            <p className={'validation-fail'}>{this.state.validation.message}</p>
          ) : null}

          <Button
            label="Submit"
            onClick={this.handleSubmit && this.handleClick}
            variant="raised"
            color="primary"
            className="margin-top-20"
          >
            Submit
          </Button>
        </form>
        <div className="successMessage">
          {this.state.buttonClicked ? <SuccessMessage /> : null}
        </div>
      </div>
    );
  }
}
