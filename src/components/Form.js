import React from 'react';

function Form(props) {
  // console.log('Form props', props)
  // const { data, handleChange, house } = props
  return (
      <form>
        <h3>Income:</h3>
            <input type='text' name='income' value={props.data.income}
            onChange={event => props.handleChange(event)} />
        <br/>

        <h3>Debts:</h3>
            Car Loan:
            <input type='text' name='carLoan' value={props.data.carLoan}
            onChange={props.handleChange} />

            Student Loan:
            <input type='text' name='studentLoan' value={props.data.studentLoan}
            onChange={props.handleChange} />
            <br/>

            Credit Card:
            <input type='text' name='creditCard' value={props.data.creditCard}
            onChange={props.handleChange} />

            Other Properties Debts:
            <input type='text' name='OtherPropertiesDebts'
            value={props.data.OtherPropertiesDebts} onChange={props.handleChange} />
            <br/>

        <h3>Down Payment:</h3>
            $<input type='text' name='downpayment'
            value={props.data.percentage > 0 && props.data.percentage >= 20 ?
               Math.round(props.house.price * props.data.percentage) : props.data.downpayment}
            onChange={props.handleChange} />&nbsp;&nbsp;
            <input type='text' name='percentage'
            value={props.data.downpayment > 0 && props.data.downpayment>=props.house.price * 0.2 ?
            Math.round( (props.data.downpayment/props.house.price)*100 ): props.data.percentage}
            onChange={props.handleChange} />%
        <br/>

        <h3>Loan Program:</h3>
            <input type='radio' name='yearFixed' value='15-year-fixed'
            checked={props.data.yearFixed === '15-year-fixed'}
            onChange={props.handleChange} />15-year-fixed
            <input type='radio' name='yearFixed' value='30-year-fixed'
            checked={props.data.yearFixed === '30-year-fixed'}
            onChange={props.handleChange} />30-year-fixed
        <br/>

        Interest Rate: <input type='text' name='interestRate'
            value={props.data.interestRate} onChange={props.handleChange} />%
        <br/>
      </form>
    )
}

export default Form;
// <button>Submit</button>
