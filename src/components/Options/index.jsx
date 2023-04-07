import clsx from "clsx";
import styles from "./styles.module.scss";

const Options = ({ selectProps, selectClassName, options }) => {
  return (
    <div className={styles.container}>
      <select className={clsx(styles.select, selectClassName)} {...selectProps}>
        {options?.map(({ value = "", label = "" }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default Options;
