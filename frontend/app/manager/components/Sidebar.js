import Link from 'next/link';
import styles from '../../../styles/globals.css'; // Import global styles

const Sidebar = ({ role }) => {
    const getLinks = () => {
        switch(role) {
            case 'manager':
                return (
                    <>
                        <Link href="/manager/doctors/list">Doctors</Link>
                        <Link href="/manager/patients/list">Patients</Link>
                        <Link href="/manager/appointments/list">Appointments</Link>
                        <Link href="/manager/consultations">Consultations</Link>
                        <Link href="/manager/pharmacy">Pharmacy</Link>
                        <Link href="/manager/users">Users</Link>
                        <Link href="/manager/accounts">Accounts</Link>
                        <Link href="/manager/stock-management">Stock Management</Link>
                    </>
                );
            case 'doctor':
                return (
                    <>
                        <Link href="/doctor/consultations">Consultations</Link>
                        <Link href="/doctor/staffs/list">Staffs</Link>
                        <Link href="/doctor/accounts/list">Accounts</Link>
                    </>
                );
            case 'patient':
                return (
                    <>
                        <Link href="/patient/consultations/view">View Consultations</Link>
                        <Link href="/patient/appointments/add">Add Appointment</Link>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <aside className={styles.sidebar}>
            {getLinks()}
        </aside>
    );
};

export default Sidebar;
