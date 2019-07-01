import React, { Component } from 'react';
import Form from './Form.js';

class FormContainer extends Component {
  constructor(){
    super()
    this.state={
      income: 0,
      carLoan:0,
      studentLoan:0,
      creditCard:0,
      OtherPropertiesDebts:0,
      downpayment:0,
      percentage:0,
      interestRate:4,
      yearFixed: ''

    }

  }
  handleChange=(e)=>{
    const { name,value } = e.target
    // debugger
   this.setState({[name]: value})

  }


    // <h2>Result</h2>
    // let p = this.props.price - this.state.downpayment,
    //     r = this.state.interestRate / 12
    //     n
    // yearFixed === '15-year-fixed'? n=180 : n=360
    // monthlyPayment = p*( r*Math.pow(1+r,n)) / (Math.pow(1+r,n)-1) )
    //result = monthlyPayment.toFixed(2)

    // <h2>Eligibility</h2>
    // D/I = (result + this.props.insurance + this.props.tax +
    // this.state.carLoan + this.state.studentLoan +
    // this.state.creditCard + OtherPropertiesDebts) / this.state.income
    // D/I < 0.5 eligibale : notEligibale
  render() {
    return (
      <div>
      <Form
        handleChange={this.handleChange}
        data={this.state}
        house={this.props.house}
      />
      </div>
    );
  }

}

export default FormContainer;
