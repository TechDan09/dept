import Head from 'next/head';
import HomePage from '@components/HomePage/HomePage';
import { Clients } from '~/src/types/clients';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/clients');
  const clients = await res.json();

  return {
    props: {
      clients
    }
  };
}

interface Props {
  clients: Clients[];
}

const Home = ({ clients }: Props) => {
  return (
    <div>
      <Head>
        <title>Dept Agency</title>
        <meta name="description" content="Creative Design Agency" />
      </Head>
      <HomePage clients={clients} />
    </div>
  );
};

export default Home;
