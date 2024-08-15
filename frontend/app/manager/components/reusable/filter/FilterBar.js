// components/FilterBar.js
import React, { useState } from 'react';
import styles from './FilterBar.module.css';

const FilterBar = ({ filters, onApply, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <div>Show filters</div>
        <button className={styles.toggleButton} onClick={toggleFilter}>
          {isOpen ? '-' : '+'} 
        </button>
      </div>
      <div className={`${styles.filterContent} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.filterRow}>
          {filters.map((filter, index) => (
            <div key={index} className={styles.filterGroup}>
              <label>{filter.name}</label>
              {filter.input}
            </div>
          ))}
        </div>
        <div className={styles.filterActions}>
          <button className={styles.resetButton} onClick={onReset}>Reset</button>
          <button className={styles.applyButton} onClick={onApply}>Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
