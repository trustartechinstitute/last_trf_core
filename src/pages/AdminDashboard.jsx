import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const snapshot = await getDocs(collection(db, "users"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setUsers(data);
  }

  async function approveUser(uid) {
    await updateDoc(doc(db, "users", uid), {
      approved: true,
    });

    fetchUsers();
  }

  async function makeAdmin(uid) {
    await updateDoc(doc(db, "users", uid), {
      role: "admin",
    });

    fetchUsers();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      {users.map((user) => (
        <div
          key={user.uid || user.id}
          style={{ marginBottom: 10, padding: 10, border: "1px solid #ccc" }}
        >
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <p>Approved: {user.approved ? "Yes" : "No"}</p>

          {!user.approved && (
            <button onClick={() => approveUser(user.uid)}>Approve</button>
          )}

          {user.role !== "admin" && (
            <button onClick={() => makeAdmin(user.uid)}>Make Admin</button>
          )}
        </div>
      ))}
    </div>
  );
}
