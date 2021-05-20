import React from 'react';
import * as styles from './footer.module.scss';
import {Link} from 'gatsby';
import {SiYoutube, SiFacebook, SiInstagram, SiTwitter} from 'react-icons/si';
const Footer = () => {
	return (
		<footer>
			<div className={'bounding-box'}>
				<div className={styles.row}>
					{/* About us Section */}
					<div className={styles.about}>
						<h2>About Us</h2>
						<p>
							We’re reimagining how you buy, sell and rent. It’s now easier to
							get into a place you love. So let’s do this, together.
						</p>
					</div>

					{/* Quick Links */}
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
								<Link to='#'>Terms and Conditions</Link>
							</li>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>Terms and Conditions</Link>
							</li>
							<li>
								<Link to='#'>About Us</Link>
							</li>
							<li>
								<Link to='#'>Terms and Conditions</Link>
							</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div className={styles.contact}>
						<h2>Contact Us</h2>
						<ul>
							<li>
								<p>Lorem, ipsum dolor.</p>
							</li>
							<li>
								<p>Lorem, ipsum.</p>
							</li>
							<li>
								<p>Kolkata - 40</p>
							</li>
							<li>
								<a href='mailto:abc@example.com'>info@arti.in</a>
							</li>
							<li>
								<a href='tel:+91 9191919191'>+91-9191919191</a>
							</li>
						</ul>
					</div>

					{/* Social Media Icons */}
					<div className={styles.social}>
						<h2>Social</h2>
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
			</div>
		</footer>
	);
};

export default Footer;
