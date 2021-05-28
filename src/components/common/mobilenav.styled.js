import styled from 'styled-components';

export const MobileLinks = styled.ul`
	position: absolute;
	top: -100%;
	left: 0;
	height: 100vh;
	width: 100vh;
	background: white;
	z-index: 10000;
	transition: all 200ms ease-in-out;

	${props => props.navOpen && `top:0;`}
`;
