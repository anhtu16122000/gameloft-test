import clsx from "clsx";
import styles from "./styles.module.scss";

const NavigationSlider = ({
  handleNext,
  handlePrev,
  indexSlider = 0,
  totalSlider = 0,
  className,
}) => {
  const currentSlider = indexSlider + 1;
  return (
    <div className={clsx(styles.root, className)}>
      <div onClick={handlePrev} className={clsx(styles.leftArrow)}>
        <img src="/icons/arrow_slider_left.svg" />
      </div>
      <div className={styles.wrapperIndex}>
        <span className={styles.currentSlider}>
          {String(currentSlider).padStart(2, "0")}
        </span>
        <span>/</span>
        <span>{String(totalSlider).padStart(2, "0")}</span>
      </div>
      <div onClick={handleNext} className={styles.rightArrow}>
        <img src="/icons/arrow_slider_right.svg" />
      </div>
    </div>
  );
};

export default NavigationSlider;
