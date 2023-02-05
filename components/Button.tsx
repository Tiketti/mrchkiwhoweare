import React from 'react';
import styles from './Button.module.css';

type Props = {
  children: React.ReactChild;
  onclick: () => void;
};

const Button = ({ children, onclick }: Props) => {
  return (
    <button type="button" className={styles.basic} onClick={() => onclick()}>
      {children}
    </button>
  );
};

export default Button;
