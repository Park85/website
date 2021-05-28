import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {
	Nav,
	BoundingBox,
	ListContainer,
	IconHolder,
	NavMenuButton,
	NavCloseButton,
	MobileListContainer,
} from './navbar.styled';

const links = [
	{
		title: 'About',
		link: '/about',
	},
	{
		title: 'Projects',
		link: '/projects',
	},
	{
		title: 'Careers',
		link: '/careers',
	},
	{
		title: 'Business',
		link: '/business',
	},
	{
		title: 'Blogs',
		link: '/blogs',
	},
	{
		title: 'Contact',
		link: '/contact',
	},
];

const Navbar = ({home, activateScrolledNavbar}) => {
	const [navOpen, setNavOpen] = useState(false);

	const handleResize = () => {
		if (window.innerWidth > 890 && navOpen) setNavOpen(false);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [navOpen]);

	return (
		<Nav scrolled={activateScrolledNavbar} home={home}>
			<BoundingBox>
				<Link to='/'>
					<StaticImage
						src='../../assets/logo_modified.png'
						alt='logo'
						width={70}
						placeholder='blurred'
					/>
				</Link>
				<ListContainer
					scrolled={activateScrolledNavbar}
					home={home}
					navOpen={navOpen}>
					{links.map(link => {
						return (
							<li key={link.title}>
								<Link
									to={link.link}
									onClick={() => {
										navOpen && setNavOpen(curr => !curr);
									}}>
									{link.title}
								</Link>
							</li>
						);
					})}
				</ListContainer>

				<IconHolder
					onClick={() => {
						setNavOpen(curr => !curr);
					}}>
					{!navOpen ? (
						<NavMenuButton home={home} scrolled={activateScrolledNavbar} />
					) : (
						<NavCloseButton />
					)}
				</IconHolder>
			</BoundingBox>
		</Nav>
	);
};

export default Navbar;
