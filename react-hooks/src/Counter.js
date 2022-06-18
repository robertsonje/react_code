import React, {useState, useEffect} from 'react';

function Counter(props) {
    const[count, setCount] = useState(0);
    const[calculation, setCalculation] = useState(0);
    {/*
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count+1);
        }, 1000);
    });
    */}
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); 
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c+1)}>+</button>
            <p>Calculation: {calculation}</p>
            <h1>I have rendered {count} times!</h1>
        </div>
    );
}

export default Counter;