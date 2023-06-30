import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = () => {

    const dataEnteredHandler = (entereddata) => {

        console.log('this is from the parent component')
        console.log(entereddata)
    }

    return <div className="new-expense">
                <ExpenseForm onEnterData={dataEnteredHandler}/>
            </div>
};


export default NewExpenses;