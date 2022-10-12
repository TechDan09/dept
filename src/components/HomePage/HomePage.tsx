import { Clients } from '~/src/types/clients';
import ClientCard from '@components/ClientCard/ClientCard';
import ClientCardList from '@components/ClientCardList/ClientCardList';
import ClientNoteList from '@components/ClientNoteList/ClientNoteList';
import ClientQuote from '../ClientQuote/ClientQuote';
import ClientsLogos from '../ClientsLogos/ClientsLogos';
import Contact from '../Contact/Contact';
import Filter from '@components/Filter/Filter';
import Hero from '@components/Hero/Hero';
import Layout from '../Layout/Layout';
import styles from './HomePage.module.scss';

interface Props {
  clients: Clients[];
}

const clientsList = [
  {
    name: 'MICROSOFT',
    description:
      'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels'
  },
  {
    name: 'O’NEILL',
    description: 'Integrating existing content into O’Neills’s new e-commerce platform'
  },
  {
    name: 'MICROSOFT',
    description:
      'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels'
  }
];

const HomePage = ({ clients }: Props) => {
  return (
    <Layout>
      <Hero />
      <Filter />
      <ClientCardList clients={clients.slice(0, 4)} />
      <div className={styles.clientNote}>
        <ClientCard
          brandName={clients[4].name}
          brandDescription={clients[4].description}
          brandImage={clients[4].brandImage}
        />
        <ClientNoteList clients={clientsList} />
      </div>
      <ClientCardList clients={clients.slice(5, 7)} />
      <div className={styles.clientNoteReversed}>
        <ClientCard
          brandName={clients[7].name}
          brandDescription={clients[7].description}
          brandImage={clients[7].brandImage}
        />
        <ClientNoteList clients={clientsList} />
      </div>
      <ClientCardList clients={clients.slice(8, 12)} />
      <ClientQuote
        quote="“Dept helped us tell our story through a bold new identity and a robust online experience.
        To the tone of 60% growth in online bookings in just one month””"
        client="MATTIJS TEN DRINK - CEO, TRANSAVIA"
      />
      <ClientCardList clients={clients.slice(12, 14)} />
      <ClientsLogos />
      <Contact />
    </Layout>
  );
};

export default HomePage;
