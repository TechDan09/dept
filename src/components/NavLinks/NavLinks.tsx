import KebabMenu from '~/src/icons/KebabMenu';
import styles from './NavLinks.module.scss';

interface Props {
  isFooter?: boolean;
  handleKebabMenu?: () => void;
}

const NavLinks = ({ isFooter, handleKebabMenu }: Props) => (
  <div className={styles.navLinks}>
    <ul>
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
        <a href="#">INSIGHTS</a>
      </li>
      <li>
        <a href="#">CAREERS</a>
      </li>
      <li>
        <a href="#">CONTACT</a>
      </li>
    </ul>
    {!isFooter && (
      <div className={styles.kebabMenu}>
        <button onClick={handleKebabMenu}>
          <KebabMenu />
        </button>
      </div>
    )}
  </div>
);

export default NavLinks;
