import React from 'react';
import { Input } from 'semantic-ui-react'

function Form(props) {
  // console.log('Form props', props)
  const { data, handleChange, house, inputOnFocus } = props
  console.log("FORM", data.downpayment > 0 && data.downpayment>=house.price * 0.2 && data.downpayment<=house.price*0.99);
  return (
      <form>
        <h3>Down Payment:</h3>

            $<Input type='number' name='downpayment' onFocus={()=>props.inputOnFocus()}
            value={data.downpayment}
            onChange={handleChange} />&nbsp;&nbsp;

            <Input type='number' name='percentage' onFocus={()=>inputOnFocus()}
            value={data.percentage}
            onChange={handleChange} />%
            <p style={{ color: 'red' }}> {data.percentage>=20 || data.downpayment>=house.price * 0.2
              || data.percentage<100 || data.downpayment<house.price || (data.percentage === '' && data.downpayment === '' )?
               null:'Down payment should be over 20% of the property price'} </p>

        <h3>Loan Program:</h3>
            <Input type='radio' name='selected' value='15-year-fixed'
            checked={data.selected === '15-year-fixed'}
            onChange={handleChange} /> 15-year-fixed &nbsp;

            <Input type='radio' name='selected' value='30-year-fixed'
            checked={data.selected === '30-year-fixed'}
            onChange={handleChange} /> 30-year-fixed
        <br/>

        Interest Rate: <Input type='number' name='interestRate'
            value={data.interestRate} onChange={handleChange} />%
        <br/>

        <h2>Eligibility</h2>
         <h3>Monthly Income:</h3>
              <Input type='number' name='income' value={data.income}
              onChange={event => handleChange(event)} />
          <br/>

          <h3>Debts:</h3>
              Car Loan:
              <Input type='number' name='carLoan' value={data.carLoan}
              onChange={handleChange} />

              Student Loan:
              <Input type='number' name='studentLoan' value={data.studentLoan}
              onChange={handleChange} />
              <br/>
              <br/>

              Credit Card:
              <Input type='number' name='creditCard' value={data.creditCard}
              onChange={handleChange} />

              Other Properties Debts:
              <Input type='number' name='OtherPropertiesDebts'
              value={data.OtherPropertiesDebts} onChange={handleChange} />
              <br/>
      </form>
    )
}

export default Form;
