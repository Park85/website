import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';

export const Nav = styled.nav`
	${props =>
		props.home
			? props.scrolled
				? `position:fixed;`
				: `position:absolute;`
			: props.scrolled
			? `position:fixed;`
			: `position:relative;`}

	top:0;
	left: 0;
	right: 0;
	z-index: 1000;

	${props =>
		props.scrolled && `box-shadow: -2px 15px 28px -7px rgba(0, 0, 0, 0.25);`}

	padding: ${props => (props.home ? '1.3em' : '1.1em')} 0;
	transition: all 150ms ease-in-out;
	background: ${props =>
		props.home ? (props.scrolled ? 'white' : 'transparent') : 'white'};
`;

export const BoundingBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.4em;
	max-width: 1400px;
	margin: 0 auto;
`;

export const ListContainer = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 48%;

	${props =>
		props.navOpen &&
		`
		display : block !important;
		position: absolute !important;
		top: 0 ;
		left: 0 ;
		right :0;
		height:100vh;
		width:100vh !important;
		background : white;
		z-index:2000;
		padding :4em 2em;
	`}

	@media (max-width: 1100px) {
		width: 65%;
	}
	@media (max-width: 890px) {
		display: none;
	}

	& li {
		${props =>
			props.navOpen &&
			`
			margin-bottom:2em;
			border-bottom : 1px solid #ebebeb;
			width: 80%;
			`}
	}

	& a {
		color: ${props =>
			!props.navOpen &&
			(props.home ? (props.scrolled ? 'black' : 'white') : 'black')};
		transition: all 150ms ease-in-out;

		${props =>
			props.navOpen &&
			`
			color:black;
			`}
	}

	& a:hover {
		color: #f3c701;
	}
`;

export const IconHolder = styled.div`
	display: none;

	@media (max-width: 890px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:hover {
		cursor: pointer;
	}
`;

export const NavMenuButton = styled(GiHamburgerMenu)`
	font-size: 30px;
	color: ${props =>
		props.home ? (props.scrolled ? 'black' : 'white') : 'black'};
`;

export const NavCloseButton = styled(IoMdClose)`
	color: black;
	font-size: 30px;
	z-index: 2000;
`;

// export const MobileListContainer = styled.ul``;
// ${props =>
// 	props.navOpen &&
// 	`
// display: block !important;
// height: 100vh !important;
// width: 100vw !important;
// background: white !important;
// position : absolute;
// top:0;
// left:0;
// `}
