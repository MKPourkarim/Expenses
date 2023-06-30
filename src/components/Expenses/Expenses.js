import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import FilterItem from './FilterItem'
import {useState} from 'react'

function Expenses(props) {
    const [year, setYear] = useState('2022');

    const selectedYear = (year) => {
        setYear(year)
    }
    
    return(
        <Card className="expenses">
            <FilterItem inputValue={year} filter={selectedYear}/>
            {props.item.map((expenses) => (
            <ExpenseItem
             title={expenses.title} 
             amount={expenses.amount} 
             date={expenses.date} 
             />
             ))}
            {/* <ExpenseItem 
            title={props.item[0].title} 
            amount={props.item[0].amount} 
            date={props.item[0].date}
            />
            <ExpenseItem 
            title={props.item[1].title} 
            amount={props.item[1].amount} 
            date={props.item[1].date}
            />
            <ExpenseItem 
            title={props.item[2].title} 
            amount={props.item[2].amount} 
            date={props.item[2].date}
            />
            <ExpenseItem 
            title={props.item[3].title} 
            amount={props.item[3].amount} 
            date={props.item[3].date}
            /> */}
        </Card>
    )
}

export default Expenses;