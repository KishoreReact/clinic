// components/DoctorList.js
import React from 'react';
import DataTable from '../../components/reusable/datatable/DataTable';

const DoctorList = () => {
  const columns = [
    { label: 'Doctor ID', accessor: 'id' },
    { label: 'Name', accessor: 'name' },
    { label: 'Specialization', accessor: 'specialization' },
    { label: 'Phone', accessor: 'phone' },
    { 
      label: 'Image', 
      accessor: 'image', 
      render: (imageSrc) => <img src={imageSrc} alt="Doctor" style={{ width: '50px' }} /> 
    },
  ];

  const data = [
    { id: 'D101', name: 'Dr. George P T', specialization: 'Cardiology', phone: '98952513333', image: '/path/to/doctor1.png' },
    { id: 'D102', name: 'Dr. Thomas K John', specialization: 'Neurology', phone: '9453883447', image: '/path/to/doctor2.png' },
    // More rows...
  ];

  const handleAddNewDoctor = () => {
    // Handle add new doctor
  };

  const handleOptionSelect = (option, row) => {
    // Handle option selection (View, Edit, Delete, etc.)
  };

  return (
    <DataTable 
      title="Doctor"
      columns={columns}
      data={data}
      onAddNew={handleAddNewDoctor}
      onOptionSelect={handleOptionSelect}
    />
  );
};

export default DoctorList;
