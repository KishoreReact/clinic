'use client';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import styles from './styles/page.module.css';
import { useState } from 'react';

// Importing the components for different sections
import PatientsList from './patients/list/page';
import DoctorsList from './doctors/list/page';
import AppointmentsList from './appointments/list/page';

export default function ManagerPage() {
    const [activeContent, setActiveContent] = useState('Home');

    const renderContent = () => {
        switch (activeContent) {
            case 'Doctors':
                return <DoctorsList />;
            case 'Patients':
                return <PatientsList />;
            case 'Appointments':
                return <AppointmentsList />;
            // Add cases for other menu items as needed
            case 'Consultations':
                return <div>Consultations</div>;
            case 'Pharmacy':
                return <div>Pharmacy</div>;
            case 'Users':
                return <div>Users</div>;
            case 'Accounts':
                return <div>Accounts</div>;
            case 'Stock Management':
                return <div>Stock Management</div>;
            default:
                return <div>Welcome to the Manager Dashboard</div>;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Navbar onSelectMenu={(menu) => setActiveContent(menu)} />
                <div className={styles.headerContent}>
                    <Header />
                    <div className={styles.mainContent}>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
