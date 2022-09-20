import styles from './Button.module.css';

const Button = ({ children, onclick }) => {
  return (
    <button type="button" className={styles.basic} onClick={() => onclick()}>
      {children}
    </button>
  );
};

export default Button;
