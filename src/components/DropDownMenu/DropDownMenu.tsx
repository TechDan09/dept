import Image from 'next/image';
import LogoWhite from '~/public/assets/logo-white.svg';
import Cancel from '~/src/icons/Cancel';
import styles from './DropDownMenu.module.scss';

interface Props {
  showDropDown: boolean;
  handleOpenDropdown: () => void;
}

const DropDownMenu = ({ showDropDown, handleOpenDropdown }: Props) => {
  return (
    <div className={`${styles.container} ${showDropDown ? styles.openDropdown : ''}`}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <Image src={LogoWhite} alt="DEPT Logo" height={19.2} width={53} />
        </div>
        <div className={styles.closeBtn} onClick={handleOpenDropdown}>
          <Cancel />
        </div>
      </div>
      <div className={styles.dropDownLinks}>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">WORK</a>
          </li>
          <li>
            <a href="#">CULTURE</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">PARTNERS</a>
          </li>
          <li>
            <a href="#">STORIES</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
          <li>
            <a href="#">EVENTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
