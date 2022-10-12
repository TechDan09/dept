import styles from './ClientNote.module.scss';

interface Props {
  brandName: string;
  brandDescription: string;
}

const ClientNote = ({ brandName, brandDescription }: Props) => {
  return (
    <div className={styles.clientNote}>
      <h3>{brandName}</h3>
      <h4>{brandDescription}</h4>
    </div>
  );
};

export default ClientNote;
