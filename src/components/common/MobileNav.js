import React from 'react';
import {Link} from 'gatsby';
import {MobileLinks} from './mobilenav.styled';
const MobileNav = ({navState, links}) => {
	const [navOpen, setNavOpen] = navState;
	return (
		<MobileLinks navOpen={navOpen}>
			<h1 onClick={setNavOpen(false)}>close</h1>
			{links.map(link => {
				return (
					<li key={link.title}>
						<Link to={link.link}>{link.title}</Link>
					</li>
				);
			})}
		</MobileLinks>
	);
};

export default MobileNav;
