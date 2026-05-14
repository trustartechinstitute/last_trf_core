// useAuth hook to get current user
import { useAuth } from "../services/authService";

// Dashboard component
export default function Dashboard() {
  const { currentUser } = useAuth();

    return (
    <>
        <h1>Dashboard</h1>
        <p>Welcome, {currentUser.email}!</p>
    </>
    );
}
