import filter from '../Assets/icons/filter.png'
import down from '../Assets/icons/down.png'
import group from '../Assets/icons/Group.png'
import search from '../Assets/icons/search.png'
import heart1 from '../Assets/icons/heartcheck.png'
import heart2 from '../Assets/icons/heartcheck1.png'
import heart3 from '../Assets/icons/heartminus.png'
import heart4 from '../Assets/icons/heartbroken.png'
import first from '../Assets/icons/1.png'
import sec from '../Assets/icons/2.png'
import third from '../Assets/icons/3.png'
import foruth from '../Assets/icons/4.png'
import fifth from '../Assets/icons/5.png'
import bulb from '../Assets/icons/bulb.png'
import styles from '../styles/body.module.css'
import Scrollbar from './Scrollbar.js'
import left from '../Assets/icons/left.png'
import right from '../Assets/icons/right.png'
import info from '../Assets/icons/info.png'

export default function body() {
  return (
    <div className={styles.container}>
      <div>
        <Scrollbar />
      </div>
      <div className={styles.bottomcontainer}>

        <div className={styles.flex1}>
          <div className={styles.heading}>Track current goals</div>
          <div className={`${styles.right} ${styles.flexdown}`}>
            <div className={styles.flex}><div className={styles.blue}>Filters</div><img className={`${styles.blue} ${styles.filter}`} src={filter}/></div>
            <div className={styles.flexdown2}>Sort by: <span className={`${styles.blue} ${styles.flex}`}>Progress (High to Low)<img className={styles.down} src={down}/></span></div>
            <div className={styles.flexdown1}><img className={styles.search} src={search}/><input className={styles.input} placeholder='Search'/></div>
          </div>
        </div>
        <div className={styles.infocontainer}>
          <div><img src={info}/></div>
          <div>Tap on a card to view more information</div>
        </div>

        <div className={styles.cards}>

          <div className={styles.card}>

            <div className={styles.cardtopflex}>
              <div className={styles.cardimgcontainer}><img className={styles.groupimg} src={group}/></div>
              <div className={styles.cardtopic}>Dhairyadev & Sayali's Vacation  Plan 1</div>
            </div>

            <div className={styles.statsgrid}>
              <div>
                <div className={styles.cardtopic1}>Goal Progress</div>
                <div className={styles.carddesc}>₹ 11,24,00,000</div>
              </div>
              <div>
                <div className={styles.cardtopic1}>Goal Amount</div>
                <div className={styles.carddesc}>₹ 15,00,00,000</div>
              </div>
              <div>
                <div className={styles.cardtopic1}>Goal Date</div>
                <div className={styles.carddesc}>March 2035</div>
              </div>
              <div>
                <div className={styles.cardtopic1}>Goal Health</div>
                <div className={styles.carddesc1}><img className={styles.heart} src={heart1}/><div className={styles.color1}>Excellent!</div></div>
              </div>
            </div>

            <div>
              <img className={styles.progress} src={first}/>
              <div className={styles.progresstext}>Goal ahead by 16 months</div>
            </div>

          </div>

          <div className={styles.card}>

<div className={styles.cardtopflex}>
  <div className={styles.cardimgcontainer}><img className={styles.groupimg} src={group}/></div>
  <div className={styles.cardtopic}>Dhairyadev & Sayali's Vacation  Plan 1</div>
</div>

<div className={styles.statsgrid}>
  <div>
    <div className={styles.cardtopic1}>Goal Progress</div>
    <div className={styles.carddesc}>₹ 2,70,00,000</div>
  </div>
  <div>
    <div className={styles.cardtopic1}>Goal Amount</div>
    <div className={styles.carddesc}>₹ 5,00,00,000</div>
  </div>
  <div>
    <div className={styles.cardtopic1}>Goal Date</div>
    <div className={styles.carddesc}>Jan 2040</div>
  </div>
  <div>
    <div className={styles.cardtopic1}>Goal Health</div>
    <div className={styles.carddesc1}><img className={styles.heart} src={heart2}/><div className={styles.color2}>Good</div></div>
  </div>
</div>

<div>
  <img className={styles.progress} src={sec}/>
  <div className={styles.progresstext}>On track</div>
</div>

          </div>

          <div className={styles.card}>

          <div className={styles.cardtopflex}>
            <div className={styles.cardimgcontainer}><img className={styles.groupimg} src={group}/></div>
            <div className={styles.cardtopic}>Dhairyadev & Sayali's Vacation  Plan 1</div>
          </div>

          <div className={styles.statsgrid}>
            <div>
              <div className={styles.cardtopic1}>Goal Progress</div>
              <div className={styles.carddesc}>₹ 42,00,000</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Amount</div>
              <div className={styles.carddesc}>₹ 1,00,00,000</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Date</div>
              <div className={styles.carddesc}>March 2035</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Health</div>
              <div className={styles.carddesc1}><img className={styles.heart} src={heart3}/><div className={styles.color3}>Weak</div></div>
            </div>
          </div>

          <div>
            <img className={styles.progress} src={third}/>
            <div className={styles.progresstext}>Go behind by <span className={styles.color3}>2 months</span></div>
          </div>

          <div>
            <div className={styles.notify}><img className={styles.bulb} src={bulb}/><div className={styles.color3}>Boost to reach your goal sooner!</div></div>
            <button className={styles.cardbtn}>Boost</button>
          </div>

          </div>

          <div className={styles.card}>

          <div className={styles.cardtopflex}>
            <div className={styles.cardimgcontainer}><img className={styles.groupimg} src={group}/></div>
            <div className={styles.cardtopic}>Dhairyadev & Sayali's Vacation  Plan 1</div>
          </div>

          <div className={styles.statsgrid}>
            <div>
              <div className={styles.cardtopic1}>Goal Progress</div>
              <div className={styles.carddesc}>₹ 11,24,00,000</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Amount</div>
              <div className={styles.carddesc}>₹ 15,00,00,000</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Date</div>
              <div className={styles.carddesc}>March 2035</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Health</div>
              <div className={styles.carddesc1}><img className={styles.heart} src={heart4}/><div className={styles.color4}>Poor</div></div>
            </div>
          </div>

          <div>
            <img className={styles.progress} src={foruth}/>
            <div className={styles.progresstext}>Go behind by <span className={styles.color4}>18 months</span></div>
          </div>

          </div>

          <div className={styles.card}>

          <div className={styles.cardtopflex}>
            <div className={styles.cardimgcontainer}><img className={styles.groupimg} src={group}/></div>
            <div className={styles.cardtopic}>Dhairyadev & Sayali's Vacation  Plan 1</div>
          </div>

          <div className={styles.statsgrid}>
            <div>
              <div className={styles.cardtopic1}>Goal Progress</div>
              <div className={styles.carddesc}>₹ 11,24,00,000</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Amount</div>
              <div className={styles.carddesc}>₹ 15,00,00,000</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Date</div>
              <div className={styles.carddesc}>March 2035</div>
            </div>
            <div>
              <div className={styles.cardtopic1}>Goal Health</div>
              <div className={styles.carddesc}>March 2035</div>
            </div>
          </div>

          <div className={styles.cardbtmcontainer}>
            <img className={styles.progress} src={fifth}/>
            <div className={styles.progresstext}>Goal reached <span className={styles.color4}>3 months</span> ahead</div>
          </div>

          </div>

        </div>

        <div className={styles.navflex}>
          <div className={styles.navigation}>showing <span>1-4</span> of <span>4</span></div>
          <div className={styles.lefticoncontainer}><img src={left} alt='img'/></div>
          <div className={styles.lefticoncontainer}><img src={right} alt='img'/></div>
        </div>

      </div>
    </div>
  )
}
