import Button from "@/components/Button/index";
import CheckBox from "@/components/CheckBox/index";
import Container from "@/components/Container";
import Input from "@/components/Input/index";
import Options from "@/components/Options/index";
import clsx from "clsx";
import styles from "./styles.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.image}>
          <img src="/home/img1.svg" />
        </div>
        <div className={styles.description}>
          <div className={styles.content}></div>
        </div>
        <Container className={styles.introduce} size="sm">
          <h2 className="heading1">Gameloft game</h2>
          <span className={styles.ratingLabel}>Racing/ Action</span>
          <span>|</span>
          <span className={styles.starRating}>
            <img src="/icons/star_active.svg" />
            <img src="/icons/star_active.svg" />
            <img src="/icons/star_active.svg" />
            <img src="/icons/star_active.svg" />
            <img src="/icons/star_unactive.svg" width={9} height={10} />
          </span>
          <div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud itation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit...
            </div>
          </div>
        </Container>
        <div className={styles.download}>
          <Container className={styles.container} size="sm">
            <label>Download latest version</label>
            <div className={styles.buttons}>
              <button>
                <img src="/home/nitendo.png" />
              </button>
              <button className={styles.btnMicroSoft}>
                <img src="/home/microsoft.png" />
              </button>
              <button>
                <img src="/home/steam.png" />
              </button>
            </div>
          </Container>
        </div>
      </div>
      <div className={styles.registerForm}>
        <Container className={styles.container} size="sm">
          <div className={styles.flex1}>
            <img src="/home/minion_grey.webp" />
          </div>
          <div className={clsx(styles.formRegister, styles.flex1)}>
            <div className={styles.wrapper}>
              <h1 className="heading3">Stay in the Know!</h1>
              <p>Don't get left behind!</p>
              <p>Subscribe to our newsletters today!</p>
              <div className={styles.form}>
                <Input inputProps={{ placeholder: "Name" }} />
                <Input inputProps={{ placeholder: "Email" }} />
                <Options
                  options={[
                    {
                      label: "Country",
                      value: "",
                    },
                  ]}
                />
                <Options
                  options={[
                    {
                      label: "Platfrom",
                      value: "",
                    },
                  ]}
                />
                <CheckBox
                  className={styles.cb1}
                  id="cb1"
                  label="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy."
                />
                <CheckBox
                  id="cb2"
                  label="I agree to receive promotional offers relating to all Gameloft games and services."
                />
                <Button>Button</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.postSection}>
        <Container size="sm">
          <h1 className="heading1">Game Community Hub</h1>
          <p className={clsx("heading2", styles.subTitle)}>Live Game Updates</p>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
