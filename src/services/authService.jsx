import { createContext, useContext, useEffect, useState } from "react";


import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// create context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // detect Firebase auth changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (!firebaseUser) {
            setCurrentUser(null);
            setAuthLoading(false);
            return;
        }

        // 1. Get Firestore profile
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        // 2. Combine data
        if (userSnap.exists()) {
            const firestoreData = userSnap.data();

            setCurrentUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            ...firestoreData,
            });
        } else {
            // fallback if document missing
            setCurrentUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: "student",
            approved: false,
            });
        }

        setAuthLoading(false);
        });

        return unsubscribe;
    }, []);


  // SIGN UP
    const signUp = async (email, password) => {
      // 1. Create Firebase auth account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      // 2. Create Firestore user document
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        role: "student",
        studentType: "adult",
        approved: false,
        profileCompleted: false,
        createdAt: serverTimestamp(),
      });

      return userCredential;
    };

  // LOGIN
const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LOGOUT
  const logout = async () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authLoading,
        signUp,
        login,
        logout,
      }}
    >
      {!authLoading && children}
    </AuthContext.Provider>
  );
}

// custom hook
export function useAuth() {
  return useContext(AuthContext);
}
