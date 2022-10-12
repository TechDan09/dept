import ClientCard from '@components/ClientCard/ClientCard';
import styles from './ClientCardList.module.scss';
import type { Clients } from '~/src/types/clients';

interface Props {
  clients: Clients[];
}

const ClientCardList = ({ clients }: Props) => {
  return (
    <div className={styles.clientCardList}>
      {clients.map((client, index) => (
        <ClientCard
          key={index}
          brandName={client.name}
          brandDescription={client.description}
          brandImage={client.brandImage}
        />
      ))}
    </div>
  );
};

export default ClientCardList;
