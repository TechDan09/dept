/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styles from './Textarea.module.scss';

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  row?: number;
  cols?: number;
  name: string;
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ row = 4, cols = 50, name, label, error, ...props }: Props, ref) => {
    return (
      <div className={styles.textarea}>
        <label htmlFor="name">{label.toUpperCase()}</label>
        <textarea rows={row} cols={cols} name={name} ref={ref} {...props} />
        <span className={styles.error}>{error}</span>
      </div>
    );
  }
);

export default Textarea;
