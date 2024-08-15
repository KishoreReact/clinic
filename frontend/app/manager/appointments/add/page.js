import { useState } from 'react';
import { addAppointment } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default function AddAppointment() {
    const [patientId, setPatientId] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addAppointment({ patientId, doctorId, date, time });
            alert('Appointment added successfully');
        } catch (error) {
            console.error('Error adding appointment:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Add Appointment</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Patient ID:
                    <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} required />
                </label>
                <label>
                    Doctor ID:
                    <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <label>
                    Time:
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </label>
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    );
}
