import React from 'react';
import Footer from './Footer';
import '../styles/globals.scss';

const Layout = props => {
	return (
		<>
			{props.children}
			<Footer />
		</>
	);
};

export default Layout;
