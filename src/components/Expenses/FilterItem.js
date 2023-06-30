import './FilterItem.css'

const FilterItem = (props) => {
    // const [select, setSelect] = useState('');
    const selectHandler = (event) => {
        // setSelect(event.target.value)
        props.filter(event.target.value)
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.inputValue} onChange={selectHandler}>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    )
}

export default FilterItem;