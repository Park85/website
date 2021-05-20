import React from 'react';
import * as styles from './footer.module.scss';
import {Link} from 'gatsby';
import {SiYoutube, SiFacebook, SiInstagram, SiTwitter} from 'react-icons/si';
const Footer = () => {
	return (
		<footer>
			<div className={'bounding-box'}>
				<div className={styles.row}>
					<div className={styles.about}>
						<h2>About Us</h2>
						<p>
							We’re reimagining how you buy, sell and rent. It’s now easier to
							get into a place you love. So let’s do this, together.
						</p>
					</div>
					<div className={styles.links}>
						<h2>Quick Links</h2>
						<ul>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>Careers</Link>
							</li>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>Terms and Conditions</Link>
							</li>
						</ul>
					</div>
					<div className={styles.contact}>
						<h2>Contact Us</h2>
						<ul>
							<li>
								<p>ABC Road</p>
							</li>
							<li>
								<p>ABC Area</p>
							</li>
							<li>
								<p>Kolkata - 40</p>
							</li>
							<li>
								<a href='mailto:abc@example.com'>info@arti.com</a>
							</li>
							<li>
								<a href='tel:+91 9191919191'>+91-9191919191</a>
							</li>
						</ul>
					</div>
					<div className={styles.social}>
						<h2>Follow Us</h2>
						<ul>
							<li>
								<a href='#'>
									<SiYoutube />
								</a>
							</li>
							<li>
								<a href='#'>
									<SiFacebook />
								</a>
							</li>
							<li>
								<a href='#'>
									<SiInstagram />
								</a>
							</li>
							<li>
								<a href='#'>
									<SiTwitter />
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* <h1 className={styles.header}>Hello World</h1> */}
			</div>
		</footer>
	);
};

export default Footer;
