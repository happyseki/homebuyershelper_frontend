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
      selected: '',
      isShow: false
    }

  }
  handleChange=(e)=>{
    let { name,value } = e.target
    // debugger
    // console.log(name, value);
    if (name !== "selected"){
      value = parseInt(value)
    }

    if ((name === "percentage")){
      if (value > 0 && value >= 20 && value<100){
        console.log(value);
        this.setState({
          downpayment: Math.round(this.props.house.price * (value/100)),
          percentage: value
        })
      } else {
        this.setState({
          percentage: value,
          downpayment: 0
        })
      }

    } else if(name === "downpayment"){
      if(value > 0 && value>=this.props.house.price * 0.2 && value<=this.props.house.price*0.99){
        console.log(value);
        this.setState({
         downpayment: value,
          percentage: Math.round((value/this.props.house.price)*100)
        })
      } else {
        this.setState({
          downpayment: value,
          percentage: 0
        })
      }
    } else {
      this.setState(prevState=>({ [name]: value }))
    }
  }

  inputOnFocus = () => {
    // this.setState(prevState=>({
    //   downpayment:0,
    //   percentage:0
    // }))
  }

  handleToggle = () =>{
    this.setState(prevState=>({
      isShow: !this.state.isShow
    }))
  }

  getMonthlyPayment=(price, downpayment, interestRate, selected )=>{
      const p = this.props.house.price - this.state.downpayment,
            r = this.state.interestRate/ 100 / 12
      let n,
          monthlyPayment
      if(this.state.selected === '15-year-fixed'){
        n=180
      }else if(this.state.selected=== '30-year-fixed'){
        n=360
      }
      monthlyPayment = p * ( r*Math.pow(1+r,n) / (Math.pow(1+r,n)-1) )
       + this.props.house.tax + this.props.house.insurance

      return monthlyPayment.toFixed(2)
  }

  getResult = (getMonthlyPayment, carLoan, studentLoan, creditCard, therPropertiesDebts) =>{
  return (
    (parseFloat(this.getMonthlyPayment()) + this.state.carLoan + this.state.studentLoan +
   this.state.creditCard + this.state.OtherPropertiesDebts) / this.state.income
    )
  }


  render() {
    console.log(this.getResult())
    // let DI = (this.getMonthlyPayment() + this.state.carLoan + this.state.studentLoan +
    // this.state.creditCard + this.state.OtherPropertiesDebts) / this.state.income
    return (
      <>
      <button type='button' className='calculator' onClick={this.handleToggle}>Check Mortgage</button>
      <br/>
      <br/>

          <div className={this.state.isShow? null:'breakdown'}>
          {
            this.state.downpayment>0 && this.state.interestRate>0 && this.state.selected !== '' ?
            <DonutChart
              monthlyPayment={this.getMonthlyPayment()}
              tax={this.props.house.tax}
              insurance={this.props.house.insurance}
            />: null
          }
      <h3>Your Monthly Payment: {
          this.state.downpayment>0 && this.state.interestRate>0 && this.state.selected !== '' ?
          this.getMonthlyPayment() : null }</h3>
      <Form
        handleChange={this.handleChange}
        inputOnFocus={this.inputOnFocus}
        data={this.state}
        house={this.props.house}
      />
      <h2 style={{ color: 'red' }}> Result</h2>
      <h3 >{this.state.income > 0 && this.getResult()<0.5? 'Congradulation, your mortgage application shall be approved by the bank' : (this.state.income === 0 ? null : 'Sorry, not eligibale')}</h3>
      <p>************************</p>
      </div>
      </>
    );
  }

}

export default FormContainer;

// displayPayment={this.state.displayPayment}
