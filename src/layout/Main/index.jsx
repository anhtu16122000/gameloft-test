import Container from "@/components/Container";
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
        <div className={styles.iconItem}>
          <img src="/icons/share.svg" />
        </div>
        <div className={styles.iconItem}>
          <img src="/icons/mail.svg" />
        </div>
        <div className={styles.iconItem}>
          <img src="/icons/headphone.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
