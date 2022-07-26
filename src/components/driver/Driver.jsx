import React from 'react';
import styles from './Driver.module.css';
import Drive from '../../images/drive.png';

const Driver = () => {
  return (
    <div className={styles.drive}>
      <div className={styles.left}>
        <img src={Drive} alt='/' />
      </div>
      <div>
        <h2>
          Find your perfect car <span>to try before you buy</span>
        </h2>
        <p>
          Make sure you future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <div className={styles.driver_btn}>
          <button>Browser Cars</button>
        </div>
      </div>
    </div>
  );
};

export default Driver;
