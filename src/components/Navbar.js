import React, { useState } from 'react';
import * as styles from './navbar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleclick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav>
      <div className={styles.logo}>
        <StaticImage src='../assets/logo_1.png' alt='logo' width={200} />
      </div>
      <div onClick={handleclick} className={styles.mobileMenu}>
        {isClicked ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div className={styles.desktopMenuContainer}>
        <ul className={styles.menuList}>
          <li>
            <Link to='/' className={styles.menuListitem}>
              Home
            </Link>
          </li>

          <li>
            <Link to='/about' className={styles.menuListitem}>
              Projects
            </Link>
          </li>

          <li>
            <Link to='/about' className={styles.menuListitem}>
              About us
            </Link>
          </li>

          <li>
            <Link to='/about' className={styles.menuListitem}>
              Career
            </Link>
          </li>

          <li>
            <Link to='/about' className={styles.menuListitem}>
              Enquiry
            </Link>
          </li>

          <li>
            <Link to='/about' className={styles.menuListitem}>
              Business Oportunity
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
