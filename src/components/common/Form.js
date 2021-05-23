import React from 'react';
import * as styles from './form.module.scss';
import { Formik } from 'formik';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>Give us your valuable feedback</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend
        ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus
        odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.
      </p>
      <div className={styles.formWrapper}>
        <form>
          <div>
            <input type='text' placeholder='Name' className={styles.input} />
          </div>

          <div>
            <input type='email' placeholder='Email' className={styles.input} />
          </div>

          <div>
            <input type='tel' placeholder='Contact' className={styles.input} />
          </div>

          <div>
            <input type='text' placeholder='Subject' className={styles.input} />
          </div>

          <div>
            <textarea className={styles.input} cols='40' rows='10' placeholder='Message'></textarea>
          </div>

          <input type='submit' className={styles.button} />
        </form>
      </div>
    </div>
  );
};

export default Form;
