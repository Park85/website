import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import * as styles from './video.module.scss';
import {StaticImage} from 'gatsby-plugin-image';

const query = graphql`
	{
		thumbnail: file(relativePath: {eq: "video-thumbnail.png"}) {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
			}
		}
	}
`;

const Video = ({youtubeId}) => {
	const [videoReady, setVideoReady] = useState(false);

	const _onReady = event => {
		// access to player in all event handlers via event.target
		event.target.mute();
		event.target.seekTo(4);
		event.target.playVideo();
	};

	const _onStateChange = event => {
		if (event.data === 1) {
			console.log('Video is Ready. Changing State');
			setTimeout(() => {
				setVideoReady(true);
			}, 500);
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
				className={styles.wrapper}
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
