import React from 'react';
import Form from '../common/Form';
import * as styles from './feedback.module.scss';
const Feedback = () => {
  return (
    <section className={styles.feedbackSection}>
      <div className={styles.formContainer}>
        <h1 className={styles.header}>Give us your valuable feedback</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          error.
        </p>
        <div className={styles.formWrapper}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
