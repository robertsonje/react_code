import React from 'react';
import Styles from './Styles';
import styled from 'styled-components';

function StyleDemo(props) {
    const StyledButton = styled.button`
        background-color: 'blue';
        color: 'white';
        font-size: 2rem;
    `;
    return (
        <div>
            <h1 style={Styles.Header}>Using style from style component!</h1>
            <p style={Styles.ToDoComponent}>Using style from style component!</p>
            <div>
                <StyledButton>Click Me</StyledButton>
            </div>
        </div>
    );
}

export default StyleDemo;