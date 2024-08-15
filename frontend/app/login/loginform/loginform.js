'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './loginform.css';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Hardcoded credentials
        const credentials = {
            manager1: 'manager#123',
            doctor1: 'doctor#123',
            patient1: 'patient#123'
        };

        if (credentials[username] === password) {
            if (username === 'manager1') {
                router.push('/manager');
            } else if (username === 'doctor1') {
                router.push('/doctor');
            } else if (username === 'patient1') {
                router.push('/patient');
            }
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Clinic Manager</h2>
                    <label className="input-label">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label className="input-label">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <div className="login-image">
                <img src="/assets/images/loginimage1.png" alt="Login Illustration" />
            </div>
        </div>
    );
}
