import React from 'react';

function Form(props) {
  return (
      <form>
        Income: <input type='text' name='income' value={props.data.income} onChange={props.handleChange} />
        <br/>
        <h3>Debts</h3>
        <br/>
        Car Loan:<input type='text' name='carLoan' value={props.data.carLoan} onChange={props.handleChange} />
        Student Loan:<input type='text' name='studentLoan' value={props.data.studentLoan} onChange={props.handleChange} />
        <br/>
        Credit Card:<input type='text' name='creditCard' value={props.data.creditCard} onChange={props.handleChange} />
        Other Properties Debts:<input type='text' name='OtherPropertiesDebts' value={props.data.OtherPropertiesDebts} onChange={props.handleChange} />
        <br/>
        Down Payment:$<input type='text' name='downpayment' value={props.data.downpayment} onChange={props.handleChange} />
        <br/>
        <h3>Loan Program</h3>
        <br/>
        Interest Rate:<input type='text' name='interestRate' defaultValue='4' value={props.data.interestRate} onChange={props.handleChange}/>%
        <br/>
        <button>Submit</button>
      </form>
    )
}

export default Form;
