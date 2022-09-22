import React from 'react'
import styles from './Address.module.css'

const Address = () => {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <p key={index}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      ))}
    </div>
  )
}

export default Address
