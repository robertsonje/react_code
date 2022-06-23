import React from 'react';
import {useNavigate} from "react-router-dom";

function CompB(props) {
    let navigate = useNavigate();
    return (
        <div>
            <h2>This is component B</h2>
            <button onClick={() => navigate(-1)}>Take me back</button><br/>
            <button onClick={() => navigate('/')}>Take me home</button>
        </div>
    );
}

export default CompB;