import styles from "./styles.module.scss";
const Button = ({ children }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default Button;
