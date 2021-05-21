import React from 'react';
import * as styles from './intro.module.scss';
import {AiOutlineUser} from '@react-icons/all-files/ai/AiOutlineUser';
import {AiOutlineHome} from '@react-icons/all-files/ai/AiOutlineHome';
import {AiOutlineSafetyCertificate} from '@react-icons/all-files/ai/AiOutlineSafetyCertificate';
import {StaticImage} from 'gatsby-plugin-image';

const Intro = () => {
	return (
		<>
			<section className={styles.aboutSectionContainer}>
				<h1>
					Atri Groups
					<br />
					Setting a benchmark in Garia
				</h1>

				{/* About us description */}
				<div className={styles.aboutDescDiv}>
					<p>
						Atri Group has been into Construction and Development of Real Estate
						since 1982 and has built a niche in the market with its{' '}
						<strong> Quality Performance and On-time Delivery.</strong>
					</p>
					<p>
						Having to its credit, a number of prestigious properties, the Group
						specializes in both Commercial and Residential projects having
						completed several commercial projects in various locations of
						Kolkata like Free School Street, Park Street, Park Lane, Gariahat
						and many Residential Buildings in Lake Town, Alipore, CIT Road and
						Southern Bypass.
					</p>
					<p>
						Atri has indeed set a benchmark in Garia area of South Kolkata with
						its landmark properties and housing complexes portraying
						well-planned architecture,{' '}
						<strong>
							{' '}
							high-end specifications and world class amenities, ensuring the
							most fulfilling lives to their occupant at affordable prices.
						</strong>
					</p>
				</div>

				{/* Icon section */}
				<div className={styles.iconContainer}>
					<div className={styles.iconItem}>
						<div className={styles.icon}>
							<AiOutlineUser size={40} />
						</div>
						<div>
							<h2>2000 +</h2>
							<h3>Happy customers</h3>
						</div>
					</div>
					<div className={styles.iconItem}>
						<div className={styles.icon}>
							<AiOutlineHome size={40} />
						</div>
						<div>
							<h2>10 +</h2>
							<h3>Projects completed</h3>
						</div>
					</div>
					<div className={styles.iconItem}>
						<div className={styles.icon}>
							<AiOutlineSafetyCertificate size={40} />
						</div>
						<div>
							<h2>30 +</h2>
							<h3>Years of building Trust</h3>
						</div>
					</div>
				</div>

				{/* Image section */}

				<div className={styles.imageContainer}>
					<StaticImage
						src='../../assets/home_1.jpg'
						alt='abouthome'
						width={'100%'}
					/>
				</div>
				{/* <div className={styles.imageContainer}>
                        <p>This will be an image</p> */}
			</section>
		</>
	);
};

export default Intro;
