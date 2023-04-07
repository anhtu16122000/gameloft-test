import clsx from "clsx";
import styles from "./styles.module.scss";

const CheckBox = ({ label = "", id, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <input id={id} className={styles.checkbox} type="checkbox" />

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
