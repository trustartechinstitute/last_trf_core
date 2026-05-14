import { Navigate } from "react-router-dom";
import { useAuth } from "./authService";

export default function ApprovalGuard({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!currentUser.approved) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Account Pending Approval</h2>
        <p>Your account is awaiting admin approval.</p>
      </div>
    );
  }

  return children;
}
