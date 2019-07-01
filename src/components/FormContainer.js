import React, { Component } from 'react';
import Form from './Form.js';

class FormContainer extends Component {
   state={
     income: '',
     carLoan:'',
     studentLoan:'',
     creditCard:'',
     OtherPropertiesDebts:'',
     downpayment:'',
     percentage:'',
    interestRate:''

   }
   handleChange(e){
     this.setState({
         [e.target.name]: e.target.value
     })
   }
  render() {
    return (
      <div>
      <Form
        handleChange={this.handleChange}
        data={this.state}
      />
      </div>
    );
  }

}

export default FormContainer;
