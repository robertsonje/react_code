import React, {useState} from 'react';

function Color(props) {
    const[color, setColor] = useState("")
    return (
        <div>
            <h3>My favorite color is {color}</h3>
            {/* <button onClick = {() => setColor("Blue")}>Change Color</button> */}
            <input type="radio" id="colorRed" name="favoriteColor" value="Red" onChange = {(e) => setColor(e.target.value)}/>
            <label for="colorRed">Red</label>
            <input type="radio" id="colorGreen" name="favoriteColor" value="Green" onChange = {(e) => setColor(e.target.value)}/>
            <label for="colorRed">Green</label>
            <input type="radio" id="colorBlue" name="favoriteColor" value="Blue" onChange = {(e) => setColor(e.target.value)}/>
            <label for="colorRed">Blue</label>
        </div>
    );
}

export default Color;