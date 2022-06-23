import {useState, useEffect} from 'react';

function useButtonHook(initializer, componentName) {
    const [counter, setCounter] = useState(initializer);
    function buttonCounter() {
        setCounter(counter + 1);
    }
    useEffect(() => {
        console.log('The user presseed the ' + componentName + ' button ' + counter + ' times.');
    }, [counter, componentName]);
    return buttonCounter;
}

export default useButtonHook;