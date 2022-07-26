import React from 'react';
import styles from './Luxury.module.css';

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style </span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1627454819213-4b261f3c3b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGx1eHVyeSUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='/'
          />
          <div className={styles.content}>
            <h3>Bugatti</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1616326938627-95865c013767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGx1eHVyeSUyMGJlbnRsZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='/'
          />
          <div className={styles.content}>
            <h3>Bentley</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1628901341130-4f2255b326f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGx1eHVyeSUyMHJvbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='/'
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1593055339366-26882b66e012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFzZXJhdGklMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='/'
          />
          <div className={styles.content}>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='/'
          />
          <div className={styles.content}>
            <h3>Porsche</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
