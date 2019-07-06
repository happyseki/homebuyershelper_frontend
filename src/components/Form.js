import React from 'react';
import { Input } from 'semantic-ui-react'

function Form(props) {
  // console.log('Form props', props)
  // const { data, handleChange, house } = props
  return (
      <form>
        <h3>Down Payment:</h3>
            $<Input type='text' name='downpayment' onFocus={()=>props.inputOnFocus()}
            value={props.data.percentage > 0 && props.data.percentage >= 20 && props.data.percentage<100 ?
               (props.data.downpayment = Math.round(props.house.price * (props.data.percentage/100)) )
               : props.data.downpayment}
            onChange={props.handleChange} />&nbsp;&nbsp;
            <Input type='text' name='percentage' onFocus={()=>props.inputOnFocus()}
            value={props.data.downpayment > 0 && props.data.downpayment>=props.house.price * 0.2 ?
            (props.data.percentage = Math.round( (props.data.downpayment/props.house.price)*100 ))
            : props.data.percentage}
            onChange={props.handleChange} />%
            <p style={{ color: 'red' }}>{props.data.percentage>=20 || props.data.downpayment>=props.house.price * 0.2
              || (props.data.percentage === '' && props.data.downpayment === '' )?
               null:'Down payment should be over 20% of the property price'}</p>
        <br/>
        <h3>Loan Program:</h3>
            <Input type='radio' name='selected' value='15-year-fixed'
            checked={props.data.selected === '15-year-fixed'}
            onChange={props.handleChange} />15-year-fixed
            <Input type='radio' name='selected' value='30-year-fixed'
            checked={props.data.selected === '30-year-fixed'}
            onChange={props.handleChange} />30-year-fixed
        <br/>

        Interest Rate: <Input type='text' name='interestRate'
            value={props.data.interestRate} onChange={props.handleChange} />%
        <br/>
        <h2>Eligibility</h2>
         <h3>Monthly Income:</h3>
              <Input type='text' name='income' value={props.data.income}
              onChange={event => props.handleChange(event)} />
          <br/>

          <h3>Debts:</h3>
              Car Loan:
              <Input type='text' name='carLoan' value={props.data.carLoan}
              onChange={props.handleChange} />

              Student Loan:
              <Input type='text' name='studentLoan' value={props.data.studentLoan}
              onChange={props.handleChange} />
              <br/>

              Credit Card:
              <Input type='text' name='creditCard' value={props.data.creditCard}
              onChange={props.handleChange} />

              Other Properties Debts:
              <Input type='text' name='OtherPropertiesDebts'
              value={props.data.OtherPropertiesDebts} onChange={props.handleChange} />
              <br/>
      </form>
    )
}

export default Form;
// <button>Submit</button>
// <h2>Result</h2>
// <h3>Monthly Payment: {
//   props.data.downpayment>0 && props.data.interestRate>0 && props.data.yearFixed !== '' ?
//   props.getMonthlyPayment() : null }</h3>
