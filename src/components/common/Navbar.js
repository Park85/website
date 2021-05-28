import React, {useState, useEffect, useRef} from 'react';
import * as styles from './navbar.module.scss';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {Nav, BoundingBox, ListContainer} from './navbar.styled';

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
	// const [isClicked, setIsClicked] = useState(false);
	// const [activateSrolledNavbar, setActivateSrolledNavbar] = useState(false);
	// const navRef = useRef(null);

	// const observe = entries => {
	// 	console.log('Firing');
	// 	console.log(entries[0]);
	// 	if (!entries[0].isIntersecting) setActivateSrolledNavbar(true);
	// 	else console.log('Navbar Visible');
	// };
	// // const handleclick = () => {
	// // 	setIsClicked(!isClicked);
	// // };

	// const options = {
	// 	rootMargin: '100px',
	// 	threshold: 1.0,
	// };

	// useEffect(() => {
	// 	console.log('Hello');
	// 	const observer = new IntersectionObserver(observe, options);
	// 	if (navRef.current) observer.observe(navRef.current);

	// 	return () => {
	// 		if (navRef.current) observer.unobserve(navRef.current);
	// 	};
	// }, []);

	return (
		<Nav scrolled={activateScrolledNavbar} home={home}>
			<BoundingBox>
				<Link to='/' className={styles.logo}>
					<StaticImage
						src='../../assets/logo_modified.png'
						alt='logo'
						width={70}
						placeholder='blurred'
					/>
				</Link>
				<ListContainer scrolled={activateScrolledNavbar} home={home}>
					{links.map(link => {
						return (
							<li key={link.title}>
								<Link to={link.link}>{link.title}</Link>
							</li>
						);
					})}
				</ListContainer>
			</BoundingBox>

			{/* <div onClick={handleclick} className={styles.mobileMenu}>
				{isClicked ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</div> */}
		</Nav>
	);
};

export default Navbar;
