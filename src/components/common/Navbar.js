import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {
	Nav,
	BoundingBox,
	ListContainer,
	IconHolder,
	NavMenuButton,
	MobileListContainer,
} from './navbar.styled';

const links = [
	{
		title: 'Home',
		link: '/',
	},
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
								<Link to={link.link}>{link.title}</Link>
							</li>
						);
					})}
				</ListContainer>

				<IconHolder
					onClick={() => {
						setNavOpen(true);
					}}>
					<NavMenuButton home={home} scrolled={activateScrolledNavbar} />
				</IconHolder>
			</BoundingBox>

			{/* <div onClick={handleclick} className={styles.mobileMenu}>
				{isClicked ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</div> */}
		</Nav>
	);
};

export default Navbar;
