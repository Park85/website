import React from 'react';
import * as styles from './footer.module.scss';
import {Link} from 'gatsby';
const Footer = () => {
	return (
		<footer>
			<div className={'bounding-box'}>
				<div className={styles.row}>
					<div>
						<h2>About Us</h2>
						<p>
							We’re reimagining how you buy, sell and rent. It’s now easier to
							get into a place you love. So let’s do this, together.
						</p>
					</div>
					<div className={styles.links}>
						<h2>Quick Links</h2>
						<Link to='#'>About Us</Link>
						<Link to='#'>Terms and Conditions</Link>
						<Link to='#'>About Us</Link>
						<Link to='#'>About Us</Link>
						<Link to='#'>About Us</Link>
						<Link to='#'>About Us</Link>
					</div>
					<div>
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
							totam. Magni voluptatum esse iusto maiores, voluptas vitae sed
							harum laboriosam.
						</p>
					</div>
					<div>
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
							totam. Magni voluptatum esse iusto maiores, voluptas vitae sed
							harum laboriosam.
						</p>
					</div>
				</div>
				{/* <h1 className={styles.header}>Hello World</h1> */}
			</div>
		</footer>
	);
};

export default Footer;
