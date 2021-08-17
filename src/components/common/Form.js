import React from 'react';
import {Formik, Form as FormikForm, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import * as styles from './form.module.scss';

const Form = () => {
	const initialValues = {
		name: '',
		email: '',
		message: '',
	};

	const validationSchema = yup.object({
		name: yup.string().trim().required('Name cannot be empty!'),
		email: yup
			.string()
			.trim()
			.email('Invalid Email!')
			.required('Email cannot be empty!'),
		message: yup.string().trim().required('Message cannot be empty!'),
	});

	const handleSubmit = (values, actions) => {
		console.log(
			'Submitting the form will not have any effect as this is a demp app.'
		);
		console.log('Form Values', values);
		actions.resetForm({
			values: {
				...initialValues,
			},
		});
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			<FormikForm autoComplete='off' className={styles.form}>
				<div className={styles.inputWrapper} id={styles.name}>
					<Field name='name' className={styles.input} placeholder='John Doe' />
					<ErrorMessage name='name' className={styles.error} component='h3' />
				</div>

				<div className={styles.inputWrapper} id={styles.email}>
					<Field
						name='email'
						className={styles.input}
						placeholder='abc@example.com'
					/>
					<ErrorMessage name='email' className={styles.error} component='h3' />
				</div>

				<div className={styles.inputWrapper} id={styles.message}>
					<Field
						as='textarea'
						cols='40'
						rows='5'
						name='message'
						className={styles.input}
						placeholder='Your message goes here'
					/>
					<ErrorMessage
						name='message'
						className={styles.error}
						component='h3'
					/>
				</div>

				<button
					type='submit'
					className={styles.button}
					style={{gridArea: 'button', justifySelf: 'start'}}>
					Submit
				</button>
			</FormikForm>
		</Formik>
	);
};

export default Form;
