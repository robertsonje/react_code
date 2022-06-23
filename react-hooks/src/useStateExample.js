import React, {useState} from 'react';

function Component4(props) {
    const [user, setUser] = useState("");
    return (
        <div>
            <h1>Hello {user}.</h1>
        </div>
    );
}

function Component3(props) {
    const [user, setUser] = useState("");
    return (
        <div>
            <h1>Hello {user}.</h1>
            <Component4 user={user} />
        </div>
    );
}

function Component2(props) {
    const [user, setUser] = useState("");
    return (
        <div>
            <h1>Hello {user}.</h1>
            <Component3 user={user} />
        </div>
    );
}

function Component1(props) {
    const [user, setUser] = useState("David");
    return (
        <div>
            <h1>Hello {user}.</h1>
            <Component2 user={user} />
        </div>
    );
}

export default Component1;