import React from 'react';
import * as styles from './form.module.scss';
import { useFormik } from 'formik';

const Form = () => {
  const regem = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      console.log('Form data', values);
    },
    validate: values => {
      let errors = {};

      if (!values.name) {
        console.log('I hear name change');
        errors.name = 'Name cannot be empty !';
      }
      if (!values.email) {
        errors.email = 'Email cannot be empty !';
      } else if (regem.test(values.email) == false) {
        errors.email = 'Invalid email!';
      }
      if (!values.message || values.message == ' ') {
        errors.message = 'Message cannot be empty !';
      }

      return errors;
    },
  });

  console.log('Errors ', formik.errors);
  return (
    <form onSubmit={formik.handleSubmit} method='post' className={styles.form}>
      <div className={styles.inputWrapper} id={styles.name}>
        <input
          type='text'
          placeholder='Name'
          className={styles.input}
          name='name'
          autoComplete='off'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <h3 className={styles.error}>{formik.errors.name}</h3>
        ) : null}
      </div>

      <div className={styles.inputWrapper} id={styles.email}>
        <input
          type='text'
          placeholder='Email'
          className={styles.input}
          name='email'
          autoComplete='off'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <h3 className={styles.error}>{formik.errors.email}</h3>
        ) : null}
      </div>

      <div className={styles.inputWrapper} id={styles.message}>
        <textarea
          className={styles.input}
          cols='40'
          rows='5'
          placeholder='Message'
          autoComplete='off'
          name='message'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}></textarea>
        {formik.touched.message && formik.errors.message ? (
          <h3 className={styles.error}>{formik.errors.message}</h3>
        ) : null}
      </div>

      <input
        type='submit'
        title='Submit'
        className={styles.button}
        style={{ gridArea: 'button', justifySelf: 'start' }}
      />
    </form>
  );
};

export default Form;
