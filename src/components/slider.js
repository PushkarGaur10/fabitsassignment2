import React from "react";
import Slider from "react-slick";
import styles from '../styles/slider.module.css'
import add from "../Assets/icons/add.png";
import icon1 from "../Assets/icons/10 (1).png";
import icon2 from "../Assets/icons/10 (2).png";
import icon3 from "../Assets/icons/10 (3).png";
import icon4 from "../Assets/icons/10 (4).png";

function MultipleItems() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.container}>
       <div className={styles.left}>
        <div className={styles.heading}>
          What financial goal do you want to plan today?
        </div>
        <div className={styles.desc}>Select a goal to start planning</div>
        <img className={styles.icon} src={add} />
      </div>

      <div className={styles.slidercontainer}>
      <Slider className={styles.slider} {...settings}>
        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Retirement</div>
              <div className={styles.carddesc}>Your old age, taken care of</div>
            </div>
            </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon4} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Emergency</div>
              <div className={styles.carddesc}>Be prepared at all times</div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon2} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Wedding</div>
              <div className={styles.carddesc}>
                Plan your dream wedding today
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon3} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Vacation</div>
              <div className={styles.carddesc}>
                Never too late for the Bahamas!
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

      
        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>

        <div>
        <div className={styles.card}>
        <div className={styles.cardiconcontainer}>
              <img src={icon1} alt="img" />
            </div>
            <div>
              <div className={styles.cardtopic}>Education</div>
              <div className={styles.carddesc}>
                Build your career, tension-free
              </div>
            </div>
        </div>
        </div>
      </Slider>
    </div>
    </div>

  );
}

export default MultipleItems;