import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import * as styles from './video.module.scss';
import {StaticImage} from 'gatsby-plugin-image';

const Video = ({youtubeId}) => {
	const [videoReady, setVideoReady] = useState(false);
	const [playerState, setPlayerState] = useState();

	const handleResize = () => {
		if (window.innerWidth <= 650) {
			console.log('Resiized. Window width BELOW 650px. Falling Back!');
			setVideoReady(false);
		} else {
			if (!videoReady && playerState === 1) {
				console.log(
					'Resized. Window width ABOVE 650px. Player state is 1. Changing State!'
				);
				setVideoReady(true);
			}
		}
	};

	useEffect(() => {
		if (window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}

		return () => {
			window.removeEventListener('resize', handleResize);
			console.log('Removed Listener');
		};
	});

	const _onReady = event => {
		// access to player in all event handlers via event.target
		event.target.mute();
		event.target.seekTo(4);
		event.target.playVideo();
	};

	const _onStateChange = event => {
		console.log(event.data);
		setPlayerState(event.data);
		if (window !== 'undefined') {
			if (event.data === 1 && window.innerWidth >= 650) {
				// console.log('Width : ', window.innerWidth);
				console.log(
					'Video is Ready. Window width above 650px. Changing State.'
				);
				setTimeout(() => {
					setVideoReady(true);
				}, 500);
			} else {
				console.log('Player state NOT 1. Falling Back!');
				setVideoReady(false);
			}
		}
	};

	const _onError = event => {
		console.log('Error Occured while playing video');
		setVideoReady(false);
	};

	const _onEnd = event => {
		event.target.playVideo();
	};

	const videoOptions = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			controls: 0,
			loop: 1,
		},
	};
	return (
		<>
			<div
				className={styles.thumbnailWrapper}
				style={videoReady ? {display: 'none'} : {display: 'block'}}>
				<StaticImage
					src='../../assets/video-thumbnail.png'
					alt='video-thumbnail'
					placeholder='blurred'
					className={styles.thumbnail}
				/>
			</div>

			<div
				className={styles.videoWrapper}
				style={!videoReady ? {display: 'none'} : {display: 'block'}}>
				<YouTube
					videoId={youtubeId}
					opts={videoOptions}
					containerClassName={styles.frameContainer}
					onReady={_onReady}
					onEnd={_onEnd}
					onStateChange={_onStateChange}
					onError={_onError}
				/>
			</div>

			<div id={styles.overlay}></div>
		</>
	);
};
export default Video;
