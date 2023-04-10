import clsx from "clsx";
import styles from "./styles.module.scss";

const Options = ({
  className,
  selectProps,
  selectClassName,
  LeftIcon,
  options,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      {LeftIcon && <LeftIcon />}
      <select className={clsx(styles.select, selectClassName)} {...selectProps}>
        {options?.map(({ value = "", label = "" }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
