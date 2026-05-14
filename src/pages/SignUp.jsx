//SignUp.jsx
import { useState } from "react";
import { useAuth } from "../services/authService";
import { Link } from "react-router-dom";
// import my custom firebase errors handler
import { getFirebaseAuthErrorMessage } from "../services/firebaseErrors";


export default function SignUp() {
    //sign up function from authService
    const { signUp } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // error state for sign up errors
    const [error, setError] = useState(null);
    // loading state
    const [loading, setLoading] = useState(false);
    // success state
    const [success, setSuccess] = useState(false);


    // handle sign up form submit
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
        const userCredential = await signUp(email, password);

        setSuccess(true);
        // alert("Sign up successful! Welcome, " + userCredential.user.email);
        } catch (error) {
        // get friendly error message from firebase error code
        const friendlyMessage = getFirebaseAuthErrorMessage(error.code);
        setError(friendlyMessage);
        // log error to console for debugging
        console.error("Sign up error:", error);
        // alert(error.message);
        } finally {
        setLoading(false);
        }
    };

    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        {success && <p>Sign up successful! Welcome, {email}</p>}
        <form action="" onSubmit={handleSignUp}>
            <input type="email" name="" id="" placeholder="email:" value={email} disabled={loading} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="" id="" placeholder="password:" value={password} disabled={loading} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
            </button>
        </form>
        </>
    );
}
