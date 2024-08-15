import React from 'react';
import styles from './DataTable.module.css';

const DataTable = ({ columns, data, title, onAddNew, onOptionSelect }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <h2>{title}</h2>
        {onAddNew && <button className={styles.addButton} onClick={onAddNew}>Add New</button>}
      </div> */}
    
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(row[column.accessor]) : row[column.accessor]}
                </td>
              ))}
              <td>
                <div className={styles.options}>
                  <select onChange={(e) => onOptionSelect(e.target.value, row)}>
                    <option>Options</option>
                    <option>View</option>
                    <option>Edit</option>
                    <option>Delete</option>
                    <option>Patient Card</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableFooter}>
        <div className={styles.exportOptions}>
          <button>Copy</button>
          <button>Excel</button>
          <button>PDF</button>
          <button>Print</button>
        </div>
        <div className={styles.pagination}>
          <button>Previous</button>
          <span>1</span>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
