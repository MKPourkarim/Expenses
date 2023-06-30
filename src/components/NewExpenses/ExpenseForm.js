import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amoutn: '',
    //     date: '',
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, title: event.target.value}
        // })
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // })
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: date,
        }

        props.onEnterData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
        
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__contorls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={amount} min="0.01" step="0.01" onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={date} min="2019-0~1-01" max="2022-12-13" onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;