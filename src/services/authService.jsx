// context API service sample
import { createContext, use, useState } from "react";


const AuthContext = createContext();

export function AuthProvider({children}) {
    const [username, setUsername] = useState("Daniel");
    const [balance, setBalance] = useState(100);

    // getting to work with Firebase auth service, but for now, just use some dummy data states to test the context API
    

    return (
        <AuthContext.Provider value={{ username, setUsername, balance, setBalance }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext };

export function useAuth() {
    return use(AuthContext);
}