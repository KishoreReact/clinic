import { useState } from 'react';
import { addPatient } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default function AddPatient() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPatient({ name, contact, address });
            alert('Patient added successfully');
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Add Patient</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Contact Info:
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
                </label>
                <label>
                    Address:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
}
