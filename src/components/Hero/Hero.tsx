import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p>WORK</p>
        <h1>
          A selection of projects that <span>pioneer tech</span> and <span>marketing</span> to help
          brands stay ahead.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
