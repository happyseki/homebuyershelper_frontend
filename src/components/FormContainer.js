import React, { Component } from 'react';
import Form from './Form.js';
import DonutChart from './DonutChart.js';

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
      selected: '30-year-fixed'
      // displayPayment:0
    }

  }
  handleChange=(e)=>{
    const { name,value } = e.target
    // debugger
   this.setState(prevState=>({ [name]: value })
    )
    // const p = this.props.house.price - this.state.downpayment,
    //       r = this.state.interestRate/ 100 / 12
    // let n,
    //     monthlyPayment
    //     if(this.state.selected === '15-year-fixed'){
    //       n=180
    //     }else if(this.state.selected=== '30-year-fixed'){
    //       n=360
    //     }
    //     monthlyPayment = p * ( r*Math.pow(1+r,n) / (Math.pow(1+r,n)-1) )
    //      + this.props.house.tax + this.props.house.insurance
    //      this.setState(prevState=>({ displayPayment: this.state.displayPayment + monthlyPayment.toFixed(2) })
    //       )

  }
 keyPressed=(e)=>{
   console.log(e.key)
 }

  getMonthlyPayment=(price, downpayment, interestRate, selected )=>{
      const p = this.props.house.price - this.state.downpayment,
            r = this.state.interestRate/ 100 / 12
      let n,
          monthlyPayment
      // this.state.yearFixed === '15-year-fixed' ?  n=180 : n=360
      if(this.state.selected === '15-year-fixed'){
        n=180
      }else if(this.state.selected=== '30-year-fixed'){
        n=360
      }
      monthlyPayment = p * ( r*Math.pow(1+r,n) / (Math.pow(1+r,n)-1) )
       + this.props.house.tax + this.props.house.insurance
       // this.setState(prevState=>({
       //  displayPayment: monthlyPayment.toFixed(2)
       // }))
      return monthlyPayment.toFixed(2)
  }

  inputOnFocus = ()=> {
   this.setState(prevState=>({
     downpayment:'',
     percentage:''
   }))
 }

  render() {
    // console.log(this.state.selected)
    let DI = (this.getMonthlyPayment() + this.state.carLoan + this.state.studentLoan +
    this.state.creditCard + this.state.OtherPropertiesDebts) / this.state.income
    return (
      <div>
      <h2>Result</h2>
        <DonutChart
          getMonthlyPayment={this.getMonthlyPayment}
          tax={this.props.house.tax}
          insurance={this.props.house.insurance}
        />
      <h3 style={{ color: 'red' }}>Monthly Payment: {
          this.state.downpayment>0 && this.state.interestRate>0 && this.state.selected !== '' ?
          this.getMonthlyPayment() : null }</h3>
      <Form
        handleChange={this.handleChange}
        inputOnFocus={this.inputOnFocus}
        data={this.state}
        house={this.props.house}
      />
      <h3 style={{ color: 'red' }}> Result</h3>
      <h3 >{this.state.income > 0 && DI<0.5? 'Congrads!Eligible!' : (this.state.income === 0 ? null : 'Sorry, not eligibale')}</h3>
      <p>************************</p>
      </div>
    );
  }

}

export default FormContainer;

// displayPayment={this.state.displayPayment}
