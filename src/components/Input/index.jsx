import clsx from "clsx";
import styles from "./styles.module.scss";

const Input = ({ inputProps, inputClassName, RightIcon, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <input className={clsx(styles.input, inputClassName)} {...inputProps} />
      {RightIcon && <RightIcon />}
    </div>
  );
};

export default Input;
