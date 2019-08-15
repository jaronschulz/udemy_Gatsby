import React from 'react';
import SingleTour from './singleTour';
import styles from '../../css/items.module.css';

const Tours = ({ tours }) => {
  return (
    <section className={styles.tours}>
      <h2>on tours</h2>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <SingleTour id={node.id} tour={node} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
