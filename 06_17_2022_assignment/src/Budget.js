import React, {useState, useEffect} from 'react';

function Budget(props) {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [amountRemaining, setAmountRemaining] = useState(0);
    useEffect(() => {
        setAmountRemaining(() => budget - expenses);
    }, [budget, expenses]); 
    return (
        <div>
            <label>Budget:&emsp;</label>
            <input type="number" name="budget" id="budget" onChange = {(e) => setBudget(() => e.target.value)}/>    <br/>
            <label>Expenses:&emsp;</label>
            <input type="number" name="expenses" id="expenses" onChange = {(e) => setExpenses(() => e.target.value)}/>&emsp;<br/>
            <label>Amount Remaining: $</label>
            <label>{amountRemaining}</label>
        </div>
    );
}

export default Budget;