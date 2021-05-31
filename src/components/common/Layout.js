import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import Seo from '../common/SEO';
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
			<Seo seoTitle={seoTitle} description={description} />
			<Nav home={home} activateScrolledNavbar={activateScrolledNavbar} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
