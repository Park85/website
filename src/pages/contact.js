import React from 'react';
import HeaderImage from '../components/common/HeaderImage';
import Layout from '../components/common/Layout';
import ContactDetails from '../components/Contact';

const Contact = props => {
	return (
		<Layout seoTitle='Contact' description='Contact Atri Group'>
			<HeaderImage title='Contact Us' url={props.uri} />

			<ContactDetails />
		</Layout>
	);
};

export default Contact;
