import React from "react";
import styles from "./KeyTable.module.css";

const KeyTable = ({ data, setCodeStatus, copies, setCopies, setInfo }) => {
  const handleCopy = (el) => {
    navigator.clipboard.writeText(el.key);
    setCodeStatus(false);
    setInfo();
    setCopies([el, ...copies]);
  };

  return (
    <div className={styles.container}>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            <th style={{ width: "15%" }} scope="col">
              ID
            </th>
            <th style={{ width: "65%" }} scope="col">
              Key
            </th>
            <th style={{ width: "20%" }} scope="col">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td style={{ width: "15%" }}>{index + 1}</td>
              <td style={{ width: "65%" }}>{el.address.split(",")[0]}</td>
              <td style={{ width: "20%" }}>
                <button className={styles.btn} onClick={() => handleCopy(el)}>
                  选号
                  <span className={styles.tooltiptext}>选号!</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyTable;
