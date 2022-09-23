import React from 'react'
import styles from './Address.module.css'

const Address = ({ addresses }) => {
  return (
    <div className={styles.container}>
      {addresses.map((address, index) => (
        <p key={index}>{address}</p>
      ))}
    </div>
  )
}

export default Address
