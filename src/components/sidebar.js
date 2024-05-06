import React from 'react'
import styles from '../styles/sidebar.module.css'
import logo from '../Assets/logo/image.svg'
import notification from '../Assets/logo/notifications.png'
import me from '../Assets/logo/memoji.png'
import vert from '../Assets/logo/more_vert.png'
import business from '../Assets/icons/add_business.png'
import setting from '../Assets/icons/admin_panel_settings.png'
import chart from '../Assets/icons/bubble_chart.png'
import estate from '../Assets/icons/real_estate_agent.png'
import tab from '../Assets/icons/Tab Icons.png'
import track from '../Assets/icons/track_changes.png'
import tune from '../Assets/icons/tune.png'
import userprofile from '../Assets/icons/accountcircle.png'
import menu from '../Assets/icons/menu.png'

export default function sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
      <div className={styles.logomenu}>
      <img className={styles.menu} src={menu} alt='img'/>
        <img className={styles.logo} src={logo}/>
      </div>

<div className={styles.logomenu1}>

        <div className={styles.notificationcontainer}>
          <img className={styles.notification} src={notification}/>
        </div>
        <div><img className={styles.userprofile} src={userprofile} alt='img'/></div>
</div>

      </div>

      <div className={styles.card}>
        <img src={me}/>
        <div>
          <div className={styles.cardname}>Dhruv S.</div>
          <div className={styles.cardemail}>dhruv@fabits.com</div>
        </div>
        <img className={styles.vert} src={vert}/>
      </div>

      <div className={styles.btmcontainer}>
        <div className={styles.icons}><img className={styles.iconimg} src={tab}/><div className={styles.icontext}>Home</div></div>
        <div className={styles.topic}>Finance</div>
        <div className={`${styles.icons} ${styles.active}`}><img className={styles.iconimg} src={track}/><div className={styles.icontext}>Plan a Goal</div></div>
        <div className={styles.icons}><img className={styles.iconimg} src={chart}/><div className={styles.icontext}>Discover Top Funds</div></div>
        <div className={styles.icons}><img className={styles.iconimg} src={estate}/><div className={styles.icontext}>My Investments</div></div>
        <div className={styles.icons}><img className={styles.iconimg} src={business}/><div className={styles.icontext}>IPO</div></div>
        <div className={styles.topic}>Finance</div>
        <div className={styles.icons}><img className={styles.iconimg} src={setting}/><div className={styles.icontext}>Insurance</div></div>
        <div className={styles.icons}><img className={styles.iconimg} src={tune}/><div className={styles.icontext}>Insurance</div></div>
      </div>

    </div>
  )
}
