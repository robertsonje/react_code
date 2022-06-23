import React from 'react';
import {useNavigate} from "react-router-dom";

function Home(props) {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to the home page!</h1>
            <button onClick={() => navigate("/compA")}>Take me to Component A</button><br/>
            <button onClick={() => navigate("/compB")}>Take me to Component B</button><br/>
            <button onClick={() => navigate("/compC")}>Take me to Component C</button><br/>
            <button onClick={() => navigate(-1)}>Take me back</button>
        </div>
    );
}

export default Home;