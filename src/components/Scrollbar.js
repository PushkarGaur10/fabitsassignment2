import add from "../Assets/icons/add.png";
import styles from "../styles/scrollbar.module.css";
import icon1 from "../Assets/icons/10 (1).png";
import icon2 from "../Assets/icons/10 (2).png";
import icon3 from "../Assets/icons/10 (3).png";
import icon4 from "../Assets/icons/10 (4).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Scrollbar1() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.heading}>
          What financial goal do you want to plan today?
        </div>
        <div className={styles.desc}>Select a goal to start planning</div>
        <img className={styles.icon} src={add} />
      </div>
      <div className={styles.swipercontainer}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={5}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Retirement</div>
              <div className={styles.carddesc}>Your old age, taken care of</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon4} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Emergency</div>
              <div className={styles.carddesc}>Be prepared at all times</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon2} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Wedding</div>
              <div className={styles.carddesc}>
                Plan your dream wedding today
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon3} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Vacation</div>
              <div className={styles.carddesc}>
                Never too late for the Bahamas!
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
