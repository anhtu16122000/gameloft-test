import clsx from "clsx";
import styles from "./styles.module.scss";
const Container = ({ children, style, className, size = "lg" }) => {
  return (
    <div
      style={style}
      className={clsx(
        styles.container,
        className,
        size === "lg" && styles.lg,
        size === "sm" && styles.sm,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
