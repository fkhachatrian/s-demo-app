/*jshint esversion: 6 */

import React from 'react';
import PersonalInfoComponent from '../presentations/PersonalInfoComponent';
import BankAccountComponent from '../presentations/BankAccountComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bankAccountFields: []
    };
  }

  handleSubmitClick = () => {
    const formData = new FormData(this.refs.registerationForm);
    let result = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      bankAccounts: []
    };

    let ibans = formData.getAll('iban');
    let bankNames = formData.getAll('bankName');

    for (let i = 0; i < ibans.length; i += 1) {
      result.bankAccounts.push({iban: ibans[i], bankName: bankNames[i]});
    }

    result = JSON.stringify(result);
    alert(result);
  }

  handleAddBankAccountClick = () => {
    this.setState((prevState) => {
      const bankAccountFields = prevState.bankAccountFields;
      const accountCount = bankAccountFields.length;

      bankAccountFields.push(
        <BankAccountComponent
          key={accountCount}
          handleRemoveBankAccountClick={() => this.handleRemoveBankAccountClick(accountCount)}
          handleBankAccountFilled={this.handleBankAccountFilled}
          />
      );
      return {
        bankAccountFields: bankAccountFields
      };
    })
  }

  handleRemoveBankAccountClick = (index) => {
    this.setState((prevState) => {
      const bankAccountFields = prevState.bankAccountFields;
      bankAccountFields[index] = null;

      return {
        bankAccountFields: bankAccountFields
      };
    });
  }

  render() {
    return (
      <section className='page'>
        <header className='header'>
          <div className='title'>
            <span>Smava - Demo Task</span>
          </div>
        </header>
        <section className='main-content'>
          <h2>Register account</h2>
          <form ref='registerationForm'>
            <div>
              <PersonalInfoComponent />
              <div>
                <h3>Bank accounts</h3>
              </div>
              {this.state.bankAccountFields}
            </div>
            <div>
              <input type='button' name='add-bank-account' value='+Add bank account' onClick={this.handleAddBankAccountClick} />
            </div>
            <section className='submit-action'>
              <input type='button' name='submit' ref='submit' value='Submit' onClick={this.handleSubmitClick} />
            </section>
          </form>
        </section>
        <footer className='footer'>
          <div className='title'>
            <span>Smava - Demo Task</span>
          </div>
        </footer>
      </section>
    );
  }
}
