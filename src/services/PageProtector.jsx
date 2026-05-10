import { useAuth } from "./authService";
// navigate to login page if user is not authorized to view the page, otherwise, show the page
import { Navigate } from "react-router";

export default function PageProtector({ children }) {
    // 
    const { username } = useAuth();

    if (username === "virus") {
        return <Navigate to="/login" />;
    }
    return children;
}
    