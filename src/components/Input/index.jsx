import clsx from "clsx";
import styles from "./styles.module.scss";

const Input = ({ inputProps, inputClassName }) => {
  return (
    <div className={styles.container}>
      <input className={clsx(styles.input, inputClassName)} {...inputProps} />
    </div>
  );
};

export default Input;
