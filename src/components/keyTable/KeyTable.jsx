import React from 'react'
import styles from './KeyTable.module.css'

const KeyTable = () => {
  return (
    <div className={styles.container}>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Key</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>1234567890</td>
              <td>
                <button className={styles.btn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KeyTable
