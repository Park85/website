import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Nav,
  BoundingBox,
  ListContainer,
  IconHolder,
  NavMenuButton,
  NavCloseButton
} from './navbar.styled';
import { navLinks } from '../../utils/links';

const Navbar = ({ home, activateScrolledNavbar }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 890 && navOpen) setNavOpen(false);
  }, [navOpen]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

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
          {navLinks.map(link => {
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
