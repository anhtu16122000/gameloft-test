import Container from "@/components/Container/index";
import Options from "@/components/Options/index";
import clsx from "clsx";
import styles from "./styles.module.scss";

const MyFooter = ({ isMobile }) => {
  return (
    <footer
      className={clsx(
        isMobile && styles.rootMobile,
        !isMobile && styles.root,
        !isMobile && styles.fullWidth,
      )}
    >
      {isMobile && (
        <div className={isMobile && styles.followMobile}>
          <div style={{ fontWeight: "bold", marginBottom: 10 }}>Follow Us</div>
          <div style={{ display: "flex", gap: 10 }}>
            <div>
              <img src="/home/facebook_blue.png" />
            </div>
            <div>
              <img src="/home/linkedin_blue.png" />
            </div>
            <div>
              <img src="/home/twitter_blue.png" />
            </div>
            <div>
              <img src="/home/youtube_blue.png" />
            </div>
          </div>
          <div></div>
        </div>
      )}
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ margin: "auto 0px", flex: 1 }}>
          <Container className={styles.contactContainer} size="sm">
            <div className={styles.gameLoftSection}>
              <div className={styles.contacts}>
                <div>
                  <img
                    className={clsx(isMobile && styles.imgMobile)}
                    src="/home/gameloft_logo.png"
                  />
                </div>
                {!isMobile && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      marginLeft: 30,
                    }}
                  >
                    <div style={{ fontWeight: "bold", fontSize: 25 }}>
                      Follow Us
                    </div>
                    <div style={{ display: "flex", gap: 20 }}>
                      <div>
                        <img src="/home/facebook.png" />
                      </div>
                      <div>
                        <img src="/home/linkedin.png" />
                      </div>
                      <div>
                        <img src="/home/twitter.png" />
                      </div>
                      <div>
                        <img src="/home/youtube.png" />
                      </div>
                    </div>
                    <div>
                      <Options
                        LeftIcon={() => <img src="/icons/global_icon.svg" />}
                        className={styles.options}
                        selectClassName={styles.optionsSelect}
                        options={[
                          {
                            label: "English",
                            value: "english",
                          },
                        ]}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.indexing}>
                <div className={styles.info}>
                  <div>VISIT</div>
                  <div>Gameloft Games </div>
                  <div>Gameloft Careers </div>
                  <div>Gameloft News </div>
                  <div>Gameloft Forum </div>
                  <div>Gameloft Corporate </div>
                  <div>Gameloft Advertising </div>
                  <div>Gameloft Support </div>
                </div>
                <div className={styles.info}>
                  <div>LEGAL</div>
                  <div>Terms of Use</div>
                  <div>Privacy Policy</div>
                  <div>Cookies Policy</div>
                  <div>EULA</div>
                  <div>Legal Notices</div>
                  <div>Event Rules</div>
                  <div>Business Contacts</div>
                </div>
              </div>
            </div>
          </Container>
          {isMobile && (
            <Container size="sm">
              <div className={styles.copyRight}>
                ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft
                logo are trademarks of Gameloft in the U.S. and/or other
                countries. All other trademarks are the property of their
                respective owners.
              </div>
            </Container>
          )}
        </div>
      </div>
      {!isMobile && (
        <div style={{ justifySelf: "flex-end" }}>
          <div>
            <hr style={{ border: "1px solid white" }} />
            <Container size="sm">
              <div className={styles.copyRight}>
                ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft
                logo are trademarks of Gameloft in the U.S. and/or other
                countries. All other trademarks are the property of their
                respective owners.
              </div>
            </Container>
          </div>
        </div>
      )}
    </footer>
  );
};

export default MyFooter;
