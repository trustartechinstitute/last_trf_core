import { Navigate } from "react-router-dom";
import { useAuth } from "./authService";

export default function RoleGuard({ children, allowedRoles }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/" />;
  }

  return children;
}
