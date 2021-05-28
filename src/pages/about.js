import React, {useRef} from 'react';
import Layout from '../components/common/Layout';
import Intro from '../components/About/Intro';
import Whyus from '../components/About/Whyus';
import Testimonial from '../components/common/Testimonial';
import HeaderImage from '../components/common/HeaderImage';
import Feedback from '../components/About/Feedback';
import useIntersection from '../hooks/useIntersection';

const About = props => {
	const containerRef = useRef(null);
	const activateScrolledNavbar = useIntersection(containerRef);
	return (
		<Layout
			seoTitle='About'
			description='Atri group about page'
			activateScrolledNavbar={activateScrolledNavbar}>
			<HeaderImage title='About Us' url={props.uri} ref={containerRef} />
			<div className={'bounding-box'}>
				<Intro />
				<Whyus />
				<Testimonial />
			</div>
			<Feedback />
		</Layout>
	);
};
export default About;
