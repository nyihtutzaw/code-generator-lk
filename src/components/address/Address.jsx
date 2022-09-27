import React from "react";
import styles from "./Address.module.css";

const Address = ({ label, info, data }) => {
  return (
    <div className={styles.container}>
      {info.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
      {data.map((el, index) => (
        <div key={index}>
          <p>Key: {el.key}</p>
          <p>Address: {el.address.split(",")[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Address;
