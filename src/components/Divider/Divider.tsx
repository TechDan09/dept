import styles from './Divider.module.scss';

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return <hr className={`${styles.hr} ${className}`} />;
};

export default Divider;
