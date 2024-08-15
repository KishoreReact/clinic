//import { fetchAppointments } from '../../../../utils/api';
//import styles from '../../../styles/manager.css';

export default  function AppointmentsList() {
    //const appointments = await fetchAppointments();
    
    const appointments2 = [
        {
            id: 1,
            patientName: 'John Doe',
            doctorName: 'Dr. Smith',
            date: '2024-08-15',
            status: 'Completed'
        },]
    return (
        <div className={styles.container}>
            <h2>Appointments List</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments2.map((appointment) => (
                        <tr key={appointment.id}>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.doctorName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
