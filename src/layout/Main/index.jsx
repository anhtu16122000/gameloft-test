import Container from "@/components/Container/index";
import ShareIcon from "@/components/ShareIcon/index";
import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header className={styles.root}>
        <Container className={styles.containerHead}>
          <div className={styles.logo}>
            <img src="/icons/logo.svg" />
            <img src="/icons/gameloft_text.svg" />
          </div>
          <div className={styles.menuIcon}>
            <img src="/icons/menu_icon.svg" />
          </div>
        </Container>
      </header>
      <div className={styles.body}>{children}</div>
      <div className={styles.floatIcon}>
        <ShareIcon />
        <div className={styles.iconItem}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17.12" height="13.04">
            <path
              d="M15.615 0H1.505C.676 0 0 .675 0 1.505v10.03c0 .827.673 1.505 1.505 1.505h14.11c.826 0 1.505-.673 1.505-1.504V1.505C17.12.678 16.447 0 15.615 0Zm-.208 1.003L8.592 7.82 1.717 1.003h13.69ZM1.003 11.328v-9.62l4.831 4.789-4.83 4.83Zm.71.71 4.833-4.835 1.694 1.68a.502.502 0 0 0 .708-.002l1.651-1.652 4.808 4.808H1.712Zm14.403-.71L11.31 6.52l4.807-4.808v9.616Z"
              fill="#141414"
              fillRule="evenodd"
              data-name="Path 376"
            />
          </svg>
        </div>
        <div className={styles.iconItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.076"
            height="17.552"
          >
            <path
              d="M14.381 7.256h-.043V6.19a6.191 6.191 0 1 0-12.382 0v1.065h-.261c-.956 0-1.694.847-1.694 1.824v2.716a1.716 1.716 0 0 0 1.694 1.76h1.607a.413.413 0 0 0 .391-.457V7.777c0-.26-.152-.522-.39-.522h-.478V6.191a5.322 5.322 0 0 1 10.644 0v1.064h-.478c-.239 0-.391.261-.391.522v5.322a.413.413 0 0 0 .391.456h.5l-.044.065a3.432 3.432 0 0 1-2.759 1.369 2.15 2.15 0 0 0-4.257.413 2.172 2.172 0 0 0 2.172 2.15 2.237 2.237 0 0 0 1.564-.673c.278-.285.46-.65.521-1.043a4.301 4.301 0 0 0 3.454-1.716l.413-.608c.934-.065 1.52-.652 1.52-1.5V9.298c0-.934-.694-2.041-1.694-2.041Zm-11.556 5.43h-1.13a.847.847 0 0 1-.826-.89V9.08c0-.5.348-.956.826-.956h1.13v4.562Zm6.712 3.585c-.24.26-.579.41-.934.412A1.325 1.325 0 0 1 7.3 15.402a1.282 1.282 0 1 1 2.563-.001c.018.323-.1.638-.326.87Zm5.67-4.258c0 .586-.565.673-.826.673h-.912V8.124h.912c.478 0 .826.674.826 1.173v2.716Z"
              fill="#141414"
              fillRule="evenodd"
              data-name="Path 378"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
