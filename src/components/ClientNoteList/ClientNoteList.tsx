import React from 'react';
import { Clients } from '~/src/types/clients';
import ClientNote from '@components/ClientNote/ClientNote';
import Divider from '@components/Divider/Divider';
import styles from './ClientNoteList.module.scss';

interface Props {
  clients: Omit<Clients, 'brandImage'>[];
}

const ClientNoteList = ({ clients }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        {clients.map((client, index) => (
          <React.Fragment key={index}>
            <ClientNote brandName={client.name} brandDescription={client.description} />

            {index !== clients.length - 1 ? <Divider /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ClientNoteList;
