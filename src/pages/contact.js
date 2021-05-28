import React, {useRef} from 'react';
import HeaderImage from '../components/common/HeaderImage';
import Layout from '../components/common/Layout';
import ContactDetails from '../components/Contact';
import useIntersection from '../hooks/useIntersection';

const Contact = props => {
	const containerRef = useRef(null);
	const activateScrolledNavbar = useIntersection(containerRef);

	return (
		<Layout
			seoTitle='Contact'
			description='Contact Atri Group'
			activateScrolledNavbar={activateScrolledNavbar}>
			<HeaderImage title='Contact Us' url={props.uri} ref={containerRef} />
			<ContactDetails />
		</Layout>
	);
};

export default Contact;
