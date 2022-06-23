import React from 'react';
import useCustomHook from './useCustomHook';

function CustomHookComponent(props) {
    const clickedButton = useCustomHook(0, "FirstComponent");
    return (
        <div>
            <h1>This is the first Component</h1>
            <button onClick={clickedButton}>Click here!</button>
        </div>
    );
}

export default CustomHookComponent;