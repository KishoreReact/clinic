'use client';

import styles from './Navbar.module.css'; // Import the specific styles for Navbar
import { useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = ({ onSelectMenu }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('Home');

    const handleMenuChange = (menu) => {
        setSelectedMenu(menu);
        //onClick(menu); // Pass the selected menu to the parent component
        //console.log(menu);
        
    };


    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleMenuClick = (menu) => {
        onSelectMenu(menu); // Pass the selected menu item to the parent
    };

    return (
        <div className={`${styles.navbarContainer} ${isMenuVisible ? '' : styles.hidden}`}>
            <div className={styles.topSection}>
                <img src="/assets/images/menuLogo.png" alt="Company Logo" className={styles.logoImage} />
            </div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search menu..." className={styles.searchInput} />
                <button className={styles.searchButton}>
                    <HiOutlineSearch className={styles.searchIcon} />
                </button>
            </div>
            <nav className={styles.navMenu}>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Home')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Home'} 
                        onChange={() => handleMenuChange('Home')} 
                    />Home
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Doctors')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Doctors'} 
                        onChange={() => handleMenuChange('Doctors')} 
                    />Doctors
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Patients')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Patients'} 
                        onChange={() => handleMenuChange('Patients')} 
                    />Patients
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Appointments')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Appointments'} 
                        onChange={() => handleMenuChange('Appointments')} 
                    />Appointments
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Consultations')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Consultations'} 
                        onChange={() => handleMenuChange('Consultations')} 
                    />Consultations
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Pharmacy')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Pharmacy'} 
                        onChange={() => handleMenuChange('Pharmacy')} 
                    />Pharmacy
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Users')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Users'} 
                        onChange={() => handleMenuChange('Users')} 
                    />Users
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Accounts')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Accounts'} 
                        onChange={() => handleMenuChange('Accounts')} 
                    />Accounts
                </label>
                <label className={styles.menuItem} onClick={() => handleMenuClick('Stock Management')}>
                <input 
                        type="radio" 
                        name="menu" 
                        checked={selectedMenu === 'Stock Management'} 
                        onChange={() => handleMenuChange('Stock Management')} 
                    />Stock Management
                </label>
            </nav>
        </div>
    );
};

export default Navbar;
