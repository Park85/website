import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import SEO from '../common/SEO';
import '../../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = ({children, seoTitle, description}) => {
	return (
		<>
			<SEO seoTitle={seoTitle} description={description} />
			{/* <Nav /> */}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
