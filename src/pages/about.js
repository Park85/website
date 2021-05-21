import React from 'react';
import Layout from '../components/Layout';
import Intro from '../components/About/Intro';
import Whyus from '../components/About/Whyus';
import Testimonial from '../components/common/Testimonial';
const About = () => {
	return (
		<Layout>
			<div className={'bounding-box'}>
				<Intro />
				<Whyus />
				<Testimonial />
			</div>
		</Layout>
	);
};
export default About;
