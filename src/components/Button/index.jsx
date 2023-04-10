import clsx from "clsx";
import styles from "./styles.module.scss";

const Button = ({ children, fullWidth = false, className }) => {
  return (
    <div className={clsx(styles.container, fullWidth && styles.fullWidth)}>
      <button
        className={clsx(
          styles.button,
          fullWidth && styles.fullWidth,
          className,
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
