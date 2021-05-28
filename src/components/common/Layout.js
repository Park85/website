import React from 'react';
import Nav from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import SEO from '../common/SEO';
import '../../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = ({
	children,
	seoTitle,
	description,
	home,
	activateScrolledNavbar,
}) => {
	return (
		<>
			<SEO seoTitle={seoTitle} description={description} />
			<Nav home={home} activateScrolledNavbar={activateScrolledNavbar} />
			{/* <MobileNav navState={navState} links={links} /> */}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
