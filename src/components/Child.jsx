// import created global data states from context API
import { useContext } from "react";
import { AuthContext } from "../services/authService";
// a sample componenet to test ideas in jsx file called Child.jsx




export function Child({username="unknown"}) {

    const { balance, setBalance } = useContext(AuthContext);
    return (
        <>
            <h1>I am a child called {username}</h1>
            <p>Balance: {balance}</p>
            <button onClick={() => setBalance(balance + 10)} >Add 10 to balance</button>
        </>
    )
}
