import type { CSSProperties } from 'react';
import ElipseIcon from '../../icons/ElipseIcon';
import styles from './ClientCard.module.scss';

interface Props {
  brandName: string;
  brandDescription: string;
  brandImage: string;
}

const ClientCard = ({ brandName, brandDescription, brandImage }: Props) => {
  const style = { '--bg-img': `url(${brandImage})` } as CSSProperties;

  return (
    <div className={styles.clientCard} style={style}>
      <div className={styles.container}>
        <h3>{brandName}</h3>
        <h4>{brandDescription}</h4>
        <div className={styles.actions}>
          <ElipseIcon />
          <a href="">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
