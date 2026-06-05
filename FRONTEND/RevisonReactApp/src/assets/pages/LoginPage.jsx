import {useState} from 'react';

function LoginPage() {
    const[userName, setUserName] = useState("");
    const[city, setCity] = useState("");

    return (
        <>
        <input type="text"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name" />

        <hr/>
        <br/>
        <br/>
        <br/>
        <hr/>

        <div>My user Name is {userName}</div>
        <div>My city is {city}</div>

        <hr />
        <br />
        <br />
        <br />
        <hr />

        <input type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter your city"
         />

        </>
    );
}

export default LoginPage;