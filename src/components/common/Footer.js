import React from 'react';
import * as styles from './footer.module.scss';
import { Link } from 'gatsby';
import social from '../../utils/socials';
import * as uniqueId from 'lodash/uniqueId';
import { basic, address } from '../../utils/contacts';
import { footerLinks } from '../../utils/links';
const Footer = () => {
  return (
    <footer>
      <div className={'bounding-box'}>
        <div className={styles.row}>
          {/* About us Section */}
          <div className={styles.about}>
            <h2>About Us</h2>
            <p>
              We’re reimagining how you buy, sell and rent. It’s now easier to
              get into a place you love. So let’s do this, together.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h2>Quick Links</h2>
            <ul>
              {footerLinks.map(link => {
                return (
                  <li key={uniqueId()}>
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.contact}>
            <h2>Contact Us</h2>
            <ul>
              {address.map(line => {
                return (
                  <li key={uniqueId()}>
                    <p>{line.value}</p>
                  </li>
                );
              })}
              {basic.map(contact => {
                return (
                  <li key={uniqueId()}>
                    <a href={contact.href}>{contact.value}</a>
                  </li>
                );
              })}
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
