import Button from "@/components/Button/index";
import Container from "@/components/Container";
import DownloadIcon from "@/components/DownLoadIcon";
import Input from "@/components/Input/index";
import useScreenSize from "@/hooks/useScreenSize";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import CheckBox from "@/components/CheckBox/index";
import NavigationSlider from "@/components/NavigationSlider/index";
import Options from "@/components/Options/index";
import ShareIcon from "@/components/ShareIcon/index";
import MyFooter from "@/layout/Footer/index";
import throttle from "@/utils/throttle";
import "swiper/css";
import "swiper/css/pagination";

const Poster = ({ isMobile }) => {
  return (
    <div className={clsx(styles.poster, !isMobile && styles.heightFitScreen)}>
      <div className={styles.main}>
        <div className={styles.image}>
          <img src="/home/img1.png" />
        </div>
        <Container
          className={clsx(styles.introduce, !isMobile && styles.moveUp)}
          size="sm"
        >
          <h2 className={"heading1"}>Gameloft game</h2>
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
      </div>
      <div className={styles.download}>
        <Container
          className={clsx(styles.container, !isMobile && styles.moveUp)}
          size="sm"
        >
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
  );
};
const RegisterForm = ({ isMobile }) => {
  const sizeScreen = useScreenSize();
  return (
    <div
      className={clsx(styles.registerForm, !isMobile && styles.heightFitScreen)}
    >
      <Container className={styles.container} size="sm">
        {!sizeScreen === "sm" && (
          <div className={clsx(styles.flex1, !isMobile && styles.moveUp)}>
            <img src="/home/minion_grey.webp" />
          </div>
        )}
        <div
          className={clsx(
            styles.formRegister,
            styles.flex1,
            !isMobile && styles.moveUp,
          )}
        >
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
  );
};

const PostSection = ({ isMobile }) => {
  const mapNumberSlide = {
    sm: 2.7,
    lg: 2.7,
    xl: 5.7,
  };
  const sizeScreen = useScreenSize();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carListRef = useRef(null);
  const carItemRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const handleSlideChange = (event) => {
    if (swiperRef.current !== null) {
      setCurrentIndex(swiperRef.current.swiper.realIndex);
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const [LOGOS] = useState([
    "/home/car_1.png",
    "/home/car_2.png",
    "/home/car_3.png",
    "/home/car_4.png",
    "/home/car_5.png",
    "/home/car_6.png",
  ]);
  const [iPost, setIPost] = useState(0);

  useEffect(() => {
    const carListE = carListRef?.current;
    const checkArrowActive = () => {
      const rightArrowE = rightArrowRef?.current;
      const leftArrowE = leftArrowRef?.current;
      const reachLeft = carListE.scrollLeft === 0;
      const reachRight =
        carListE.scrollLeft + carListE.clientWidth === carListE.scrollWidth;
      if (rightArrowE && leftArrowE) {
        const isDisableLeftArrow =
          !leftArrowE.classList.contains(styles.inActiveArrow) && reachLeft;
        const isDisableRightArrow =
          !rightArrowE.classList.contains(styles.inActiveArrow) && reachRight;
        if (isDisableRightArrow) {
          rightArrowE.classList.add(styles.inActiveArrow);
        } else {
          rightArrowE.classList.remove(styles.inActiveArrow);
        }
        if (isDisableLeftArrow) {
          leftArrowE.classList.add(styles.inActiveArrow);
        } else {
          leftArrowE.classList.remove(styles.inActiveArrow);
        }
      }
    };
    checkArrowActive();
    let timeout;
    if (carListE) {
      const handleScroll = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          checkArrowActive();
        }, 250);
      };
      carListE.addEventListener("scroll", handleScroll);
      return () => {
        carListE.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const decrement = () => {
    const carListE = carListRef?.current;
    const carItemE = carItemRef?.current;
    if (carListE && carItemE) {
      const widthCarItem = carItemE.offsetWidth;
      const currentOffsetScroll = carListE.scrollLeft;
      const newOffset = currentOffsetScroll - widthCarItem;
      carListE.scrollTo({
        top: 0,
        left: newOffset,
        behavior: "smooth",
      });
    }
  };
  const increment = () => {
    const carListE = carListRef?.current;
    const carItemE = carItemRef?.current;
    const widthCarItem = carItemE.offsetWidth;
    const currentOffsetScroll = carListE.scrollLeft;
    const newOffset = currentOffsetScroll + widthCarItem;
    if (carListE && carItemE) {
      carListE.scrollTo({
        top: 0,
        left: newOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={clsx(styles.postSection, !isMobile && styles.heightFitScreen)}
    >
      <div className={styles.wrapperPost}>
        <div>
          <Container size={isMobile ? "lg" : "sm"}>
            <h1
              style={{ fontSize: `${isMobile ? "25px" : "45px"}` }}
              className={clsx("heading1", !isMobile && styles.moveUp)}
            >
              Game Community Hub
            </h1>
          </Container>
        </div>
        <div style={{ position: isMobile ? "relative" : "unset" }}>
          <Container size="sm">
            {!isMobile && (
              <>
                <p
                  className={clsx(
                    "heading2",
                    styles.subTitle,
                    !isMobile && styles.moveUp,
                  )}
                >
                  Live Game Updates
                </p>
                <div
                  className={clsx(styles.carList, !isMobile && styles.moveUp)}
                  ref={carListRef}
                >
                  <div
                    className={styles.leftArrow}
                    ref={leftArrowRef}
                    onClick={decrement}
                  >
                    <img
                      className={clsx(iPost <= 0 && styles.inActiveArrow)}
                      src="/home/arrow_left_active.svg"
                    />
                  </div>
                  {LOGOS?.map((logo, index) => {
                    return (
                      <div
                        ref={carItemRef}
                        key={index}
                        className={styles.carItem}
                        onClick={() => {
                          setIPost(index);
                        }}
                      >
                        <div
                          className={clsx(
                            styles.wrapImg,
                            iPost === index && styles.wrapImgActive,
                          )}
                        >
                          <img className={styles.carItemActive} src={logo} />
                        </div>
                        <label className={styles.label}>Short Title</label>
                      </div>
                    );
                  })}
                  <div
                    className={styles.rightArrow}
                    ref={rightArrowRef}
                    onClick={increment}
                  >
                    <img
                      className={clsx(
                        iPost >= LOGOS.length - 1 && styles.inActiveArrow,
                      )}
                      src={"/home/arrow_right_active.svg"}
                    />
                  </div>
                </div>
              </>
            )}
          </Container>
          {isMobile && (
            <div
              ref={carListRef}
              className={clsx(styles.carList, !isMobile && styles.moveUp)}
            >
              <div
                className={clsx(styles.leftArrow)}
                ref={leftArrowRef}
                onClick={decrement}
              >
                <img
                  className={clsx(iPost <= 0 && styles.inActiveArrow)}
                  src="/home/arrow_left_active.svg"
                />
              </div>
              <Container style={{ display: "flex", gap: 20 }}>
                {LOGOS?.map((logo, index) => {
                  return (
                    <div
                      ref={carItemRef}
                      key={index}
                      style={{ marginLeft: index === 0 ? 175 : 0 }}
                      className={styles.carItem}
                      onClick={() => {
                        setIPost(index);
                      }}
                    >
                      <div
                        className={clsx(
                          styles.wrapImg,
                          iPost === index && styles.wrapImgActive,
                        )}
                      >
                        <img className={styles.carItemActive} src={logo} />
                      </div>
                      <label className={styles.label}>Short Title</label>
                    </div>
                  );
                })}
              </Container>
              <div
                ref={rightArrowRef}
                className={styles.rightArrow}
                onClick={increment}
              >
                <img
                  className={clsx(
                    iPost >= LOGOS.length - 1 && styles.inActiveArrow,
                  )}
                  src={"/home/arrow_right_active.svg"}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <Container
            className={clsx(styles.postCarousel, !isMobile && styles.moveUp)}
            size={`${isMobile ? "lg" : "sm"}`}
          >
            <div
              style={{ fontSize: isMobile ? "22px" : "45px" }}
              className={styles.allPost}
            >
              All Posts
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div className={styles.logoContainer}>
                <div className={styles.wrapTwitter}>
                  <img src="/icons/twitter.svg" />
                </div>
                <div className={styles.wrapInstagram}>
                  <img src="/icons/instagram.svg" />
                </div>
                <div className={styles.wrapFacebook}>
                  <img src="/icons/facebook.svg" />
                </div>
              </div>
              {!isMobile && (
                <Input
                  className={styles.containerInput}
                  inputClassName={styles.input}
                  inputProps={{ placeholder: "Search" }}
                  RightIcon={() => (
                    <img src="../../../public/icons/magnify.svg" />
                  )}
                />
              )}
            </div>
          </Container>
          {isMobile && (
            <Container>
              <Input
                className={styles.containerInput}
                inputClassName={styles.input}
                inputProps={{ placeholder: "Search" }}
                RightIcon={() => (
                  <img src="../../../public/icons/magnify.svg" />
                )}
              />
            </Container>
          )}
          {!isMobile && (
            <div className={styles.carousel}>
              <Swiper
                slidesPerView={mapNumberSlide[sizeScreen]}
                spaceBetween={30}
                ref={swiperRef}
                centeredSlides
                loop
                onSlideChange={handleSlideChange}
                className={!isMobile && styles.moveUp}
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (item) => {
                    return (
                      <SwiperSlide key={item}>
                        <div className={styles.slideItem}>
                          <div className={styles.header}>
                            <img src="/icons/facebook.png" />
                            <ShareIcon />
                          </div>
                          <div className={styles.img}>
                            <img src="/home/img1.png" />
                          </div>
                          <div className={styles.label}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos.
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  },
                )}
              </Swiper>
            </div>
          )}
          {isMobile && (
            <Container
              style={{ position: "relative" }}
              className={styles.sectionPosts}
            >
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (item) => {
                  return (
                    <div
                      key={item}
                      className={styles.slideItem}
                      style={{ marginTop: 15 }}
                    >
                      <div className={styles.header}>
                        <img src="/icons/facebook.png" />
                        <img
                          className={styles.share_icon}
                          src="/icons/share_icon.svg"
                        />
                      </div>
                      <div className={styles.img}>
                        <img src="/home/img1.png" />
                      </div>
                      <div className={styles.label}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos.
                      </div>
                    </div>
                  );
                },
              )}
              <div className={styles.floatMoreBtn}>
                <Button className={styles.btn}>More</Button>
              </div>
            </Container>
          )}
        </div>
        {!isMobile && (
          <div className={styles.navigation}>
            <NavigationSlider
              handleNext={handleNextSlide}
              indexSlider={currentIndex}
              handlePrev={handlePrevSlide}
              totalSlider={10}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const EventAndPromotions = ({ isMobile }) => {
  const swiperRef = useRef(null);
  const progressCircle = useRef([]);
  const prevRealIndex = useRef(0);
  const mapNumberSlide = {
    sm: 1.5,
    lg: 3.5,
    xl: 4.5,
  };
  const sizeScreen = useScreenSize();

  const handleSlideChange = ({ realIndex = 0, ...rest }) => {
    progressCircle?.current?.[prevRealIndex.current + 1]?.style.setProperty(
      "stroke-dashoffset",
      125.6,
    );
    prevRealIndex.current = realIndex;
  };
  const onAutoplayTimeLeft = ({ realIndex }, _, progress) => {
    progressCircle?.current?.[realIndex + 1]?.style.setProperty(
      "stroke-dashoffset",
      125.6 * (1 - (1 - progress)),
    );
  };

  return (
    <div
      className={clsx(
        styles.eventAndPromo,
        !isMobile && styles.heightFitScreen,
      )}
    >
      <div>
        <Container className={!isMobile && styles.moveUp} size="sm">
          <h1
            className="heading1"
            style={{
              fontSize: isMobile ? "25px" : "45px",
              marginTop: isMobile ? "30px" : "0px",
            }}
          >
            Special Events & Promotional
          </h1>
          <p
            className={styles.subTitle}
            style={{
              fontSize: isMobile ? "20px" : "25px",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos.
          </p>
        </Container>
        <div>
          <Swiper
            className={!isMobile && styles.moveUp}
            style={{ padding: "80px 0px" }}
            slidesPerView={mapNumberSlide[sizeScreen]}
            spaceBetween={isMobile ? 24 : 50}
            ref={swiperRef}
            loop
            centeredSlides
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1500}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            modules={[Autoplay]}
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map((item) => (
              <SwiperSlide key={item}>
                <div className={styles.sliderItem}>
                  <div className={styles.thumb}>
                    <div>
                      <img src="/home/img1.png" />
                    </div>
                  </div>
                  <div>
                    <p className={styles.shortTitle}>short title here {item}</p>
                  </div>
                  <div className={styles.hoverSection}>
                    <div className={styles.head}>
                      <p className={styles.shortTitle}>short title here</p>
                      <div className={styles.containerShare}>
                        <ShareIcon />
                      </div>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.description}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      ...
                    </div>
                    <Button className={styles.button} fullWidth>
                      read more
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {!isMobile && (
            <div className={styles.navigationPost}>
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (item) => {
                  return (
                    <div
                      className={styles.navigationItem}
                      key={item}
                      onClick={() => {
                        if (swiperRef?.current != null) {
                          swiperRef.current.swiper.slideToLoop(item - 1);
                        }
                      }}
                    >
                      <svg
                        className={styles.progressCircle}
                        viewBox="0 0 48 48"
                        ref={(el) => (progressCircle.current[item] = el)}
                      >
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <svg className={styles.outLineCircle} viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      {String(item).padStart(2, "0")}
                    </div>
                  );
                },
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const GameContent = ({ isMobile }) => {
  const mapNumberSlide = {
    sm: 1.2,
    lg: 1.8,
    xl: 2.8,
  };
  const sizeScreen = useScreenSize();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (event) => {
    if (swiperRef.current !== null) {
      setCurrentIndex(swiperRef.current.swiper.realIndex);
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div
      className={clsx(styles.gameContent, !isMobile && styles.heightFitScreen)}
    >
      <div className={styles.gameCenterWrapper}>
        <Container size="sm">
          <div
            className="heading1"
            style={{
              fontSize: isMobile ? "25px" : "45px",
              marginTop: isMobile ? "30px" : "0px",
            }}
          >
            Exclusive Game Content
          </div>
          <div
            className={styles.subTitle}
            style={{
              fontSize: isMobile ? "20px" : "45px",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos.
          </div>
        </Container>
        <div>
          <Swiper
            ref={swiperRef}
            slidesPerView={mapNumberSlide[sizeScreen]}
            spaceBetween={isMobile ? 8 : 49}
            centeredSlides
            loop
            onSlideChange={handleSlideChange}
            className={!isMobile && styles.moveUp}
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map((item) => (
              <SwiperSlide key={item}>
                <div className={styles.wrapperSlide}>
                  <div>
                    <img src="/home/img1.png" />
                  </div>
                  <div className={styles.downloadIcon}>
                    <a
                      style={{ color: "transparent" }}
                      href="/home/img1.png"
                      download
                    >
                      <DownloadIcon />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={styles.navigation}
          style={{ marginBottom: isMobile ? 15 : 0 }}
        >
          <NavigationSlider
            handleNext={handleNextSlide}
            indexSlider={currentIndex}
            handlePrev={handlePrevSlide}
            totalSlider={10}
          />
        </div>
      </div>
    </div>
  );
};

const LandingPc = () => {
  const [ITEMS] = useState([
    <Poster />,
    <RegisterForm />,
    <PostSection />,
    <EventAndPromotions />,
    <GameContent />,
    <MyFooter />,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const decrement = throttle(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, 750);
  const increment = throttle(() => {
    if (currentIndex < ITEMS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, 750);
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY < -1) {
        decrement();
      } else if (event.deltaY > 1) {
        increment();
      }
    };
    if (window) {
      window?.addEventListener("wheel", handleScroll);
    }
    return () => {
      window?.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);
  return (
    <div className={styles.root}>
      {/* <Poster />
      <RegisterForm />
      <PostSection />
      <EventAndPromotions /> */}
      {/* <Content />s */}
      {ITEMS[currentIndex]}
    </div>
  );
};

const LandingMobile = () => {
  return (
    <div className={styles.root}>
      <Poster isMobile />
      <RegisterForm isMobile />
      <PostSection isMobile />
      <EventAndPromotions isMobile />
      <GameContent isMobile />
      <MyFooter isMobile />
    </div>
  );
};

const LandingPage = () => {
  const screenSize = useScreenSize();
  return screenSize !== "sm" ? <LandingPc /> : <LandingMobile />;
};

export default LandingPage;
