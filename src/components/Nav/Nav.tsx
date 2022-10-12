import { useState } from 'react';
import Image from 'next/image';
import LogoWhite from '~/public/assets/logo-white.svg';
import LogoDark from '~/public/assets/logo-black.svg';
import styles from './Nav.module.scss';
import useMediaQuery from '~/src/utils/useMediaQuery';
import NavLinks from '../NavLinks/NavLinks';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const Nav = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const logo = isMobile ? LogoDark : LogoWhite;

  const handleOpenDropdown = () => {
    setShowDropDown(prev => !prev);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.navInnerContainer}>
        <div className={styles.logo}>
          <Image src={logo} alt="DEPT Logo" />
        </div>
        <div className={styles.navLinks}>
          <NavLinks handleKebabMenu={handleOpenDropdown} />
        </div>
        <button className={styles.mobileMenuBtn} onClick={handleOpenDropdown}>
          MENU
        </button>
      </div>
      <DropDownMenu showDropDown={showDropDown} handleOpenDropdown={handleOpenDropdown} />
    </div>
  );
};

export default Nav;
