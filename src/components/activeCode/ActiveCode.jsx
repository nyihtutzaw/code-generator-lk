import React from "react";
import styles from "./ActiveCode.module.css";

const tranformRuntimeCode = (runtime) => {
  if (runtime >= 10) {
    return "0000" + runtime;
  } else if (runtime >= 100) {
    return "000" + runtime;
  } else if (runtime >= 1000) {
    return "00" + runtime;
  } else if (runtime >= 10000) {
    return "0" + runtime;
  } else {
    return runtime;
  }
};

const ActiveCode = ({
  runtime,
  setRuntime,
  btnStatus,
  setBtnStatus,
  setActiveCode,
  activeCode,
  setCodeStatus,
  handleEdit,
  active,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.runtime_container}>
        <label id="runtime">计算次数</label>
        <input
          type="text"
          id="runtime"
          value={tranformRuntimeCode(runtime)}
          disabled={true}
          onChange={(event) => setRuntime(event.target.value)}
        />
      </div>
      <div className={styles.code_container}>
        <label id="code">激活码</label>
        <input
          type="text"
          id="code"
          onChange={(e) => setActiveCode(e.target.value)}
        />
        <button
          className={
            !btnStatus
              ? [styles.btn, styles.active].join(" ")
              : [styles.btn, styles.disable].join(" ")
          }
          onClick={() => {
            if (activeCode.length > 0) {
              handleEdit();
            }
          }}
          disabled={btnStatus}
        >
          激活
        </button>
        <button
          className={
            active
              ? [styles.btn, styles.active_green].join(" ")
              : [styles.btn, styles.disable].join(" ")
          }
          onClick={() => setCodeStatus(true)}
          disabled={!active}
        >
          开始
        </button>
      </div>
    </div>
  );
};

export default ActiveCode;
