"use client"
import styles from './Header.module.css';
import { TfiHeadphoneAlt } from 'react-icons/tfi'; // Make sure to import the icon
import { IoMdNotificationsOutline } from 'react-icons/io'; // Make sure to import the icon

const Header = () => {
    return (
            <div className={styles.container}>
      <div className={styles.menuIcon}>&#9776;</div> 
      <div className={styles.secondPortion}>
      <button className={styles.addAppointmentButton}>Add Appointments +</button>
      <button className={styles.addAppointmentButton}>Add Patients +</button>
      <div className={styles.otherIcons}>
                <div className={styles.icon}>
                    <TfiHeadphoneAlt />
                </div>
                <div className={styles.icon}>
                    <IoMdNotificationsOutline />
                </div>
            </div>
      <img className={styles.profilePicture} src="/assets/images/manager.png" alt="Profile Picture" />
      </div> 
    </div>
    );
};

export default Header;
