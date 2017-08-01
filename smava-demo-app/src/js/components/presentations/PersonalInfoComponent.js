/*jshint esversion: 6 */

import React from 'react';

import { isEmailValid, isNameValid, manageValidationState } from '../../helpers';

export default class PersonalInfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: {}
    }
  }

  validateInput = (field) => {
    let isFieldValid = true;

    if (field === 'firstName' || field === 'lastName') {
      isFieldValid = isNameValid(this.refs[field].value);
    } else if (field === 'email') {
      isFieldValid = isEmailValid(this.refs.email.value);
    }

    manageValidationState(field, isFieldValid, this);
  }

  handleFieldFocus = (field) => {
    manageValidationState(field, true, this);
  }

  render() {
    return (
      <section>
        <div>
          <div className='label'>
            <label htmlFor='first-name'>First name</label>
          </div>
          <div className='input'>
            <input
              onBlur={() => this.validateInput('firstName')}
              onFocus={() => this.handleFieldFocus('firstName')}
              type='text'
              id='first-name'
              name='firstName'
              ref='firstName'
              />
          </div>
          <div className={'error' + (this.state.isValid.firstName === false ? ' show' : '')}>
            Invalid first name.
          </div>
        </div>
        <div>
          <div className='label'>
            <label htmlFor='last-name'>Last name</label>
          </div>
          <div className='input'>
            <input
              onBlur={() => this.validateInput('lastName')}
              onFocus={() => this.handleFieldFocus('lastName')}
              type='text'
              id='last-name'
              name='lastName'
              ref='lastName'
              />
          </div>
          <div className={'error' + (this.state.isValid.lastName === false ? ' show' : '')}>
            Invalid last name.
          </div>
        </div>
        <div>
          <div className='label'>
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input'>
            <input
              onBlur={() => this.validateInput('email')}
              onFocus={() => this.handleFieldFocus('email')}
              type='email'
              id='email'
              name='email'
              ref='email'
              />
          </div>
          <div className={'error' + (this.state.isValid.email === false ? ' show' : '')}>
            Invalid e-mail.
          </div>
        </div>
      </section>
    );
  }
}
