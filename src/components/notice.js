import React from 'react'
import left from '../Assets/icons/left.png'
import styles from '../styles/sidebar.module.css'

export default function () {
  return (
    <div className={styles.flexnotice}>
      <div><img src={left}/></div>
      <div>Plan a Goal</div>
    </div>
  )
}
