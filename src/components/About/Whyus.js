import React from 'react';
import {BsHouseDoor} from 'react-icons/bs';
import {GiReceiveMoney} from 'react-icons/gi';
import {AiOutlineSafetyCertificate} from 'react-icons/ai';
import * as styles from './whyus.module.scss';
const Whyus = () => {
	return (
		<section className={styles.whyus}>
			{/* Header */}
			<div className={styles.header}>
				<h3>Why Choose Atri</h3>
				<p>We provide the best service at every step</p>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.icon}>
							<AiOutlineSafetyCertificate />
						</div>
						<h4>Quality Commitment</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Aspernatur a cum accusamus!
						</p>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.icon}>
							<GiReceiveMoney />
						</div>
						<h4>Affordable Housing</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Aspernatur a cum accusamus!
						</p>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.icon}>
							<BsHouseDoor />
						</div>
						<h4>Well Planned Architecture</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Aspernatur a cum accusamus!
						</p>
					</div>
				</div>
			</div>

			{/* Cards */}
		</section>
	);
};

export default Whyus;
