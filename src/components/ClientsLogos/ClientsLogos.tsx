import styles from './ClientsLogos.module.scss';

const logos = [
  {
    name: 'google',
    image: '/assets/images/client-logos/google.png'
  },
  {
    name: 'levis',
    image: '/assets/images/client-logos/levis.png'
  },
  {
    name: 'spotify',
    image: '/assets/images/client-logos/spotify.png'
  },
  {
    name: 'patagonia',
    image: '/assets/images/client-logos/patagonia.png'
  },
  {
    name: 'adyen',
    image: '/assets/images/client-logos/adyen.png'
  },
  {
    name: 'audi',
    image: '/assets/images/client-logos/audi.png'
  },
  {
    name: 'tesla',
    image: '/assets/images/client-logos/tesla.png'
  },
  {
    name: 'asos',
    image: '/assets/images/client-logos/asos.png'
  },
  {
    name: 'triumph',
    image: '/assets/images/client-logos/triumph.png'
  },
  {
    name: 'netflix',
    image: '/assets/images/client-logos/netflix.png'
  },
  {
    name: 'takeaway',
    image: '/assets/images/client-logos/takeaway.png'
  },
  {
    name: 'fujitsu',
    image: '/assets/images/client-logos/fujitsu.png'
  }
];

const ClientsLogos = () => {
  return (
    <div className={styles.container}>
      <h2>Clients</h2>
      <p>
        We value a great working relationship with our clients above all else. It’s why they often
        come to our parties. It’s also why we’re able to challenge and inspire them to reach for the
        stars.
      </p>

      <div className={styles.clientLogos}>
        {logos.map(logo => (
          <a href="" key={logo.name}>
            <img src={logo.image} alt={logo.name} width={114.29} height={60} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ClientsLogos;
