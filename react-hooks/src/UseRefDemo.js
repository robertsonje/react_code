import React, {useState, useEffect, useRef} from 'react';

function UseRefDemo(props) {
    const[inputVal, setInputVal] = useState("");
    const count = useRef(0);
    const previousInputVal = useRef("");
    useEffect(() => {
        previousInputVal.current = inputVal;
        count.current = count.current + 1;
    }, [inputVal])
    return (
        <div>
            <input type = 'text' value = {inputVal} onChange= {(e) => {
                setInputVal(e.target.value)
            }}/>
            <h1>Current Value: {inputVal}</h1>
            <h2>Previous Value: {previousInputVal.current}</h2>
            <h2>Render count: {count.current}</h2>
        </div>
    );
}

export default UseRefDemo;