import React from 'react';

function KeyDemo(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((num) => {
        return <li key={num.toString()}>
            {num}
        </li>;
    });
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default KeyDemo;