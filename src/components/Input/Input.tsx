/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styles from './Input.module.scss';

interface Props extends React.HTMLProps<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  name: string;
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, name, label, error, ...props }: Props, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor="name">{label.toUpperCase()}</label>
        <input type={type} name={name} ref={ref} {...props} />
        <span className={styles.error}>{error}</span>
      </div>
    );
  }
);

export default Input;
