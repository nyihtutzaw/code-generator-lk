import React from 'react'
import styles from './ActiveCode.module.css'

const ActiveCode = () => {
  return (
    <div className={styles.container}>
      <label id="code">Active Code</label>
      <input type="text" id="code" />
      <button className={[styles.btn, styles.search].join(' ')}>Search</button>
      <button className={[styles.btn, styles.play].join(' ')}>Play</button>
    </div>
  )
}

export default ActiveCode
