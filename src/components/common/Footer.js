import React from 'react';
import * as styles from './footer.module.scss';
import { Link } from 'gatsby';
import social from '../../utils/socials';
import * as uniqueId from 'lodash/uniqueId';
const Footer = () => {
  return (
    <footer>
      <div className={'bounding-box'}>
        <div className={styles.row}>
          {/* About us Section */}
          <div className={styles.about}>
            <h2>About Us</h2>
            <p>
              We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you
              love. So let’s do this, together.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/careers'>Careers</Link>
              </li>
              <li>
                <Link to='/business'>Business Opportunity</Link>
              </li>
              <li>
                <Link to='/privacy'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/terms'>Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.contact}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <p>Lorem, ipsum dolor.</p>
              </li>
              <li>
                <p>Lorem, ipsum.</p>
              </li>
              <li>
                <p>Kolkata - 40</p>
              </li>
              <li>
                <a href='mailto:abc@example.com'>info@park85.in</a>
              </li>
              <li>
                <a href='tel:+91 9191919191'>+91-9191919191</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className={styles.social}>
            <h2>Social</h2>
            <ul>
              {social.map(icon => {
                return (
                  <li key={uniqueId()}>
                    <a href={icon.link} rel='noreferrer' target='_blank'>
                      {icon.icon_2}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
