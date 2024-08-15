import { useState } from 'react';
import { addDoctor } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default function AddDoctor() {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoctor({ name, specialization, contact });
            alert('Doctor added successfully');
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Specialization:
                    <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
                </label>
                <label>
                    Contact Info:
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
                </label>
                <button type="submit">Add Doctor</button>
            </form>
        </div>
    );
}
