/*jshint esversion: 6 */

import React from 'react';
import IBAN from 'iban';

import { isBankNameValid, isIbanValid, manageValidationState } from '../../helpers';

export default class BankAccountComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: {}
    }
  }

  validateInput = (field) => {
    let isFieldValid = true;

    if (field === 'iban') {
      isFieldValid = isIbanValid(this.refs.iban.value, IBAN);
    } else if (field === 'bankName') {
      isFieldValid = isBankNameValid(this.refs.bankName.value);
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
            <label>IBAN</label>
          </div>
          <div className='input'>
            <input
              onBlur={() => this.validateInput('iban')}
              onFocus={() => this.handleFieldFocus('iban')}
              type='text'
              ref='iban'
              name='iban'
              />
            <i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.handleRemoveBankAccountClick}></i>
          </div>
          <div className={'error' + (this.state.isValid.iban === false ? ' show' : '')}>
            Invalid IBAN.
          </div>
        </div>
        <div>
          <div className='label'>
            <label>Bank name</label>
          </div>
          <div className='input'>
            <input
              onBlur={() => this.validateInput('bankName')}
              onFocus={() => this.handleFieldFocus('bankName')}
              type='text'
              ref='bankName'
              name='bankName'
              />
          </div>
          <div className={'error' + (this.state.isValid.bankName === false ? ' show' : '')}>
            Invalid bank name.
          </div>
        </div>
      </section>
    );
  }
}
