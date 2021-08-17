import React from 'react';
import * as styles from './jumbotron.module.scss';
import {StaticImage} from 'gatsby-plugin-image';
import {Link} from 'react-scroll';
const Jumbotron = React.forwardRef((_, ref) => {
	return (
		<>
			<StaticImage
				src='../../assets/home-bg.jpg'
				alt='home-bg'
				placeholder='blurred'
				className={styles.bg}
			/>

			<div id={styles.overlay} ref={ref}>
				<header>
					<h1>Park 85</h1>
					<p>Developing Lifestyle</p>
					<Link
						to='projects'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						Explore
					</Link>
				</header>
			</div>
		</>
	);
});
export default Jumbotron;
