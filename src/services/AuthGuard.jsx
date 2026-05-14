// PageProtector.jsx
import { useAuth } from "./authService";
// navigate to login page if user is not authorized to view the page, otherwise, show the page
import { Navigate } from "react-router";

export default function AuthGuard({ children }) {
    // 
    const { currentUser } = useAuth();
    // if user is not logged in, redirect to login page
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children;
}
    