"use client"
import React from 'react';
import DataTable from '../../components/reusable/datatable/DataTable';
import FilterBar from '../../components/reusable/filter/FilterBar'; // Import the FilterBar component
import styles from '../styles/PatientList.module.css';

const PatientList = () => {
  const columns = [
    { label: 'Patient ID', accessor: 'id' },
    { label: 'Name', accessor: 'name' },
    { label: 'Phone', accessor: 'phone' },
    { label: 'Address', accessor: 'address' },
    { 
      label: 'Image', 
      accessor: 'image', 
      render: (imageSrc) => <img src={imageSrc} alt="Patient" style={{ width: '50px' }} /> 
    },
    { label: 'Doctor', accessor: 'doctor' },
  ];

  const data = [
    { id: '1012', name: 'Anas', phone: '98952513333', address: 'SFS VILLA CES KAKKANAD', doctor: 'George P T', image: '/path/to/image1.png' },
    { id: '1011', name: 'Bindu Sajeev', phone: '9453883447', address: 'Cochin', doctor: 'Thomas K John', image: '/path/to/image2.png' },
    // More rows...
  ];

  const filters = [
    { name: 'Name', input: <input type="text" placeholder="Enter name" /> },
    { name: 'Phone', input: <input type="text" placeholder="Enter phone number" /> },
    { name: 'Address', input: <input type="text" placeholder="Enter address" /> },
    { name: 'Doctor', input: <input type="text" placeholder="Enter doctor name" /> },
  ];

  const handleAddNewPatient = () => {
    // Handle add new patient
  };

  const handleOptionSelect = (option, row) => {
    // Handle option selection (View, Edit, Delete, etc.)
  };

  const handleApplyFilter = () => {
    // Logic to apply the filter
    console.log('Filters applied');
  };

  const handleResetFilter = () => {
    // Logic to reset the filter
    console.log('Filters reset');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.listHeader}>Patient</h2>
      <div className={styles.header}>
         <button className={styles.addButton} onClick={handleAddNewPatient}>Add New Patient</button>
      </div>
      <FilterBar 
        filters={filters} 
        onApply={handleApplyFilter} 
        onReset={handleResetFilter} 
      />
      <DataTable 
        title=""
        columns={columns}
        data={data}
        onAddNew={handleAddNewPatient}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default PatientList;
