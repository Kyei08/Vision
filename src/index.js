import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Replace these with your actual Firebase project configuration values.
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    // ...other config values...
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const LoginPage = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    // Listen for Firebase auth state changes.
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(currentUser => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    // Google authentication
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .catch(err => {
                console.error("Google sign in error: ", err);
                setError(err.message);
            });
    };

    // If the user is authenticated, render the main App.
    if (user) {
        return <App />;
    }

    // Otherwise, show the login page.
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
                onClick={signInWithGoogle}
                style={{ display: 'block', width: '100%', padding: '1rem' }}
            >
                Sign in with Google
            </button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LoginPage />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
