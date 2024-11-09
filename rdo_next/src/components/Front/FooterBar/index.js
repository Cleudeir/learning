import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <Link href="https://twitter.com"><div className={styles.twitterIcon}></div></Link>
        <Link href="https://facebook.com"><div className={styles.facebookIcon}></div></Link>
        <Link href="https://instagram.com"><div className={styles.instagramIcon}></div></Link>
      </div>
      <div className={styles.pages}>
        <Link href="/public/home">Home</Link>
        <Link href="/public/about">About</Link>
        <Link href="/public/contact">Contact</Link>        
      </div>
      <div className={styles.openHours}>
        <p>Open: Monday - Friday, 9am - 5pm</p>
        <p>Open: Monday - Friday, 9am - 5pm</p>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2023 My Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
