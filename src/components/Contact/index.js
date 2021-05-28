import React from 'react';
import * as styles from './contact.module.scss';
import {FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';
import Form from '../common/Form';
const ContactDetails = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.contactWrapper}>
				<div className={styles.contactForm}>
					<h1 className={styles.header}>Send us a message</h1>

					<Form />
				</div>

				<div className={styles.contactDetails}>
					<h2>Contact us</h2>
					<p style={{marginBottom: '35px'}}>
						We’re reimagining how you buy, sell and rent. It’s now easier to get
						into a place you love. So let’s do this, together.
					</p>
					<div className={styles.contactBlock}>
						<h3>Address</h3>
						<p>
							<span>1447, Madurdaha Main Rd,</span>
							<span>Kolkata, West Bengal</span>
							<span>700107</span>
						</p>
					</div>
					<div className={styles.contactBlock}>
						<h3>Phone</h3>
						<a href='tel:+91 9191919191'>+91-9191919191</a>
					</div>
					<div className={styles.contactBlock}>
						<h3>Email</h3>
						<a href='mailto:info@atrigroup.in'> info@atrigroup.in </a>
					</div>
					<div className={styles.contactBlock}>
						<h3>Social</h3>
						<ul className={styles.socialWrapper}>
							{social.map(icon => {
								return (
									<li key={icon.link}>
										<a href={icon.link}>{icon.icon}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

const social = [
	{
		icon: <FaFacebookF />,
		link: 'https://facebook.com',
	},
	{
		icon: <FaYoutube />,
		link: 'https://youtube.com',
	},
	{
		icon: <FaTwitter />,
		link: 'https://twitter.com',
	},
	{
		icon: <FaInstagram />,
		link: 'https://instagram.com',
	},
];

export default ContactDetails;
