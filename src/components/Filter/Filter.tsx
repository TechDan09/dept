import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterInput}>
        <p>
          in <span tabIndex={0}>all industries</span>
        </p>
      </div>

      <div className={styles.filterLabel}>
        <p>
          Show me <span tabIndex={0}>all work</span>
        </p>
      </div>
    </div>
  );
};

export default Filter;
