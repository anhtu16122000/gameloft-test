import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";
const Container = ({ children, className, size = "lg" }) => {
  return (
    <div
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
