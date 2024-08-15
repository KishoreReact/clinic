// Consultations for Manager
//import { fetchConsultations } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default function Consultations() {
    //const consultations = await fetchConsultations();
    const consultations2 = [
        {
            id: 1,
            patientName: 'John Doe',
            doctorName: 'Dr. Smith',
            date: '2024-08-15',
            status: 'Completed'
        },
        {
            id: 2,
            patientName: 'Jane Roe',
            doctorName: 'Dr. Johnson',
            date: '2024-08-14',
            status: 'Pending'
        },
        {
            id: 3,
            patientName: 'Alex Doe',
            doctorName: 'Dr. Brown',
            date: '2024-08-13',
            status: 'Cancelled'
        },
        {
            id: 4,
            patientName: 'Maria Smith',
            doctorName: 'Dr. Green',
            date: '2024-08-12',
            status: 'Completed'
        }
    ];

    return (
        <div className={styles.container}>
            <h2>Consultations</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {consultations2.map((consultation) => (
                        <tr key={consultation.id}>
                            <td>{consultation.patientName}</td>
                            <td>{consultation.doctorName}</td>
                            <td>{consultation.date}</td>
                            <td>{consultation.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
