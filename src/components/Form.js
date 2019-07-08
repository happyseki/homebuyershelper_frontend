import React from 'react';
import { Input } from 'semantic-ui-react'

function Form(props) {
  // console.log('Form props', props)
  const { data, handleChange, house, inputOnFocus } = props
  return (
      <form>
        <h3>Down Payment:</h3>

            $<Input type='text' name='downpayment' onFocus={()=>props.inputOnFocus()}
            value={data.percentage > 0 && data.percentage >= 20 && data.percentage<100 ?
               (data.downpayment = Math.round(house.price * (data.percentage/100)) )
               : data.downpayment}
            onChange={handleChange} />&nbsp;&nbsp;

            <Input type='text' name='percentage' onFocus={()=>inputOnFocus()}
            value={data.downpayment > 0 && data.downpayment>=house.price * 0.2 ?
            (data.percentage = Math.round( (data.downpayment/house.price)*100 ))
            : data.percentage}
            onChange={handleChange} />%
            <p style={{ color: 'red' }}>{data.percentage>=20 || data.downpayment>=house.price * 0.2
              || (data.percentage === '' && data.downpayment === '' )?
               null:'Down payment should be over 20% of the property price'}</p>
        <br/>

        <h3>Loan Program:</h3>

            <Input type='radio' name='selected' value='15-year-fixed'
            checked={data.selected === '15-year-fixed'}
            onChange={handleChange} />15-year-fixed

            <Input type='radio' name='selected' value='30-year-fixed'
            checked={data.selected === '30-year-fixed'}
            onChange={handleChange} />30-year-fixed
        <br/>

        Interest Rate: <Input type='text' name='interestRate'
            value={data.interestRate} onChange={handleChange} />%
        <br/>
        
        <h2>Eligibility</h2>
         <h3>Monthly Income:</h3>
              <Input type='text' name='income' value={data.income}
              onChange={event => handleChange(event)} />
          <br/>

          <h3>Debts:</h3>
              Car Loan:
              <Input type='text' name='carLoan' value={data.carLoan}
              onChange={handleChange} />

              Student Loan:
              <Input type='text' name='studentLoan' value={data.studentLoan}
              onChange={handleChange} />
              <br/>

              Credit Card:
              <Input type='text' name='creditCard' value={data.creditCard}
              onChange={handleChange} />

              Other Properties Debts:
              <Input type='text' name='OtherPropertiesDebts'
              value={data.OtherPropertiesDebts} onChange={handleChange} />
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
