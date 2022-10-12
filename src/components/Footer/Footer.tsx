import Image from 'next/image';
import LogoWhite from '~/public/assets/logo-white.svg';
import ArrowUp from '~/src/icons/ArrowUp';
import Facebook from '~/src/icons/Facebook';
import Instagram from '~/src/icons/Instagram';
import Twitter from '~/src/icons/Twitter';
import Divider from '../Divider/Divider';
import NavLinks from '@components/NavLinks/NavLinks';
import styles from './Footer.module.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <div>
            <div className={styles.footerLogo}>
              <Image src={LogoWhite} alt="DEPT Logo" />
            </div>
            <NavLinks isFooter />
          </div>
          <div className={styles.socialLinks}>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>
        <Divider />
        <div className={styles.footerCopyrights}>
          <a href="">Chamber of Commerce: 63464101</a>
          <a href="">VAT: NL 8552.47.502.B01</a>
          <a href="">Terms and conditions</a>

          <div className={styles.footerCredits}>
            <p>© 2022 Dept Agency</p>
          </div>
        </div>
      </div>
      <button className={styles.backToTopBtn} onClick={scrollToTop}>
        <ArrowUp />
        <p>TOP</p>
      </button>
    </div>
  );
};

export default Footer;
