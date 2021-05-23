import React from 'react';
import Layout from '../components/Layout';
import Intro from '../components/About/Intro';
import Whyus from '../components/About/Whyus';
import Testimonial from '../components/common/Testimonial';
import HeaderImage from '../components/common/HeaderImage';
const About = props => {
	console.log(props);
	return (
		<Layout>
			<HeaderImage title='About Us' url={props.uri} />
			<div className={'bounding-box'}>
				<Intro />
				<Whyus />
				<Testimonial />
			</div>
		</Layout>
	);
};
export default About;
