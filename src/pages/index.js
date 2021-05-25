import React from 'react';
import Layout from '../components/common/Layout';
import Feedback from '../components/About/Feedback';
import Video from '../components/Home/Video';

export default function Home() {
	return (
		<>
			<Video youtubeId='bz45Dr-AokM' />
			<Layout seoTitle='Home'>
				<div>This is home page</div>
				<Feedback />
			</Layout>
		</>
	);
}
