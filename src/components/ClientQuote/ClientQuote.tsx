import styles from './ClientQuote.module.scss';

interface Props {
  quote: string;
  client: string;
}

const ClientQuote = ({ quote, client }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>{quote}</p>
      <p>{client}</p>
    </div>
  );
};

export default ClientQuote;
