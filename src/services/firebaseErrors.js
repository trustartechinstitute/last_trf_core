export function getFirebaseAuthErrorMessage(errorCode) {

    switch (errorCode) {

        case "auth/email-already-in-use":
        return "An account with this email already exists.";

        case "auth/invalid-email":
        return "Please enter a valid email address.";

        case "auth/user-not-found":
        return "No account found with this email.";

        case "auth/wrong-password":
        return "Incorrect password.";

        case "auth/invalid-credential":
        return "Incorrect email or password.";

        case "auth/weak-password":
        return "Password should be at least 6 characters.";

        case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";

        case "auth/network-request-failed":
        return "Network error. Check your internet connection.";

        default:
        return "Something went wrong. Please try again.";
    }
}