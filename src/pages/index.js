import React, {useRef} from 'react';
import Layout from '../components/common/Layout';
import Feedback from '../components/About/Feedback';
import Jumbotron from '../components/Home/Jumbotron';
import Testimonial from '../components/common/Testimonial';
import Project from '../components/Home/Project';
import useIntersection from '../hooks/useIntersection';

export default function Home() {
	const containerRef = useRef(null);
	const activateScrolledNavbar = useIntersection(containerRef);

	return (
		<>
			<Jumbotron ref={containerRef} />
			<Layout
				seoTitle='Home'
				home={true}
				activateScrolledNavbar={activateScrolledNavbar}>
				<div style={{background: '#f7f7f7'}}>
					<div className='bounding-box'>
						<Project />
					</div>
				</div>
				<div className='bounding-box'>
					<Testimonial />
				</div>

				<Feedback />
			</Layout>
		</>
	);
}
