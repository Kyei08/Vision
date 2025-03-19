import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

    // Apple authentication
    // Note: Apple authentication using Firebase requires configuration in the Firebase console and your Apple developer account.
    const signInWithApple = () => {
        const provider = new firebase.auth.OAuthProvider('apple.com');
        firebase.auth()
            .signInWithPopup(provider)
            .catch(err => {
                console.error("Apple sign in error: ", err);
                setError(err.message);
            });
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={signInWithGoogle} style={{ display: 'block', width: '100%', padding: '1rem', marginBottom: '1rem' }}>
                Sign in with Google
            </button>
            <button onClick={signInWithApple} style={{ display: 'block', width: '100%', padding: '1rem' }}>
                Sign in with Apple
            </button>
        </div>
    );
};

export default LoginPage;