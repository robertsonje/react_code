import React, {useState} from 'react';
import useFieldHook from './useFieldHook';
import useButtonHook from './useButtonHook';
import useFocusHook from './useFocusHook';

function EntryForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const updateUsername = useFieldHook(username, "username");
    const updatePassword = useFieldHook(password, "password");
    const updateEmail = useFieldHook(email, "email");
    const submitCounter = useButtonHook(0, "Submit");
    const resetCounter = useButtonHook(0, "Reset");
    const [usernameGainFocus, usernameLoseFocus] = useFocusHook(0, "username");
    const [emailGainFocus, emailLoseFocus] = useFocusHook(0, "email");
    const [passwordGainFocus, passwordLoseFocus] = useFocusHook(0, "password");
    const [submitGainFocus, submitLoseFocus] = useFocusHook(0, "submit button");
    const [ResetGainFocus, ResetLoseFocus] = useFocusHook(0, "reset button");
    return (
        <div>
            <label>Username:&emsp;</label>
            <input type="text" name="username" id="username" onFocus={usernameGainFocus} onBlur={usernameLoseFocus} onChange = {(e) => {setUsername(e.target.value); updateUsername(username)}}/>    <br/>
            <label>Email:&emsp;</label>
            <input type="text" name="email" id="email" onFocus={emailGainFocus} onBlur={emailLoseFocus} onChange = {(e) => {setEmail(e.target.value); updateEmail(email)}} />    <br/>
            <label>Password:&emsp;</label>
            <input type="password" name="password" id="password" onFocus={passwordGainFocus} onBlur={passwordLoseFocus} onChange = {(e) => {setPassword(e.target.value); updatePassword(password)}}/>&emsp;<br/>
            <button onFocus={submitGainFocus} onBlur={submitLoseFocus} onClick={() => submitCounter()}>Submit</button>&emsp;
            <button onFocus={ResetGainFocus} onBlur={ResetLoseFocus} onClick={() =>{
                setUsername("");
                setEmail("");
                setPassword("");
                document.getElementById('username').value = "";
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";
                resetCounter();
            }}>Reset</button>
        </div>
    );
}

export default EntryForm;