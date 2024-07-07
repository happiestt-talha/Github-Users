// src/SignIn/SignIn.js
import { useState } from 'react';
import styles from '../css/Signin.module.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log('Username:', username);
        console.log('Password:', password);
        
    };

    return (
        <div className={styles.signInContainer}>
            <form className={styles.signInForm} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign In</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input
                        type="text"
                        id="username"
                        className={styles.input}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
