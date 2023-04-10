import styles from "./styles.module.scss";
const DownLoadIcon = () => {
  return (
    <div className={styles.iconItem}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40.615"
        height="38.602"
        viewBox="4.197 4.016 40.615 38.602"
      >
        <g data-name="Group 123">
          <g data-name="Path 203">
            <path
              d="M24.504 4.016c11.216 0 20.307 8.642 20.307 19.302s-9.091 19.3-20.307 19.3c-11.215 0-20.307-8.64-20.307-19.3S13.289 4.016 24.504 4.016Z"
              fill="#fff"
              fillRule="evenodd"
            />
            <path
              d="M24.504 4.016c11.216 0 20.307 8.642 20.307 19.302s-9.091 19.3-20.307 19.3c-11.215 0-20.307-8.64-20.307-19.3S13.289 4.016 24.504 4.016Z"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="rgba(0,0,0,0 )"
              fill="transparent"
            />
          </g>
          <path
            className={styles.iconShape}
            d="M24.625 24.56V14.498"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="#141414"
            fill="transparent"
            data-name="Path 328"
          />
          <path
            className={styles.iconShape}
            d="m21.46 21.733 3.134 3.289 2.976-3.29"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="#141414"
            fill="transparent"
            data-name="Path 329"
          />
          <path
            className={styles.iconShape}
            d="M32.887 26.539v2.796H16.425h0v-2.796"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="#141414"
            fill="transparent"
            data-name="Path 330"
          />
        </g>
      </svg>
    </div>
  );
};

export default DownLoadIcon;
