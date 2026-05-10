// import created global data states from context API
import { useContext } from "react";
import { AuthContext, useAuth } from "../services/authService";
// a sample componenet to test ideas in jsx file called Compo.jsx

export function Compo(props) {
    // get global data states from context API
    const { username, balance } = useAuth();

    return (
        <>
            <h1>I am compo1 component</h1>
            {props.children}
            <h1>By the way, the global data states: </h1>
            <p>Username: {username}</p>
            <p>Balance: {balance}</p>
            <h1>WOw</h1>
        </>
    )
}


