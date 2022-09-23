import React from 'react'
import styles from './ActiveCode.module.css'

const tranformRuntimeCode = (runtime) => {
  if (runtime >= 10) {
    return '0000' + runtime
  } else if (runtime >= 100) {
    return '000' + runtime
  } else if (runtime >= 1000) {
    return '00' + runtime
  } else if (runtime >= 10000) {
    return '0' + runtime
  } else {
    return runtime
  }
}

const ActiveCode = ({ runtime, setRuntime, status, setStatus }) => {
  return (
    <div className={styles.container}>
      <div className={styles.runtime_container}>
        <label id="runtime">Runtime</label>
        <input
          type="text"
          id="runtime"
          value={tranformRuntimeCode(runtime)}
          disabled={true}
          onChange={(event) => setRuntime(event.target.value)}
        />
      </div>
      <div className={styles.code_container}>
        <label id="code">Active Code</label>
        <input type="text" id="code" />
        <button
          className={
            !status
              ? [styles.btn, styles.start].join(' ')
              : [styles.btn, styles.stop].join(' ')
          }
          onClick={() => setStatus(true)}
          disabled={status}
        >
          Start
        </button>
        <button
          className={
            status
              ? [styles.btn, styles.start].join(' ')
              : [styles.btn, styles.stop].join(' ')
          }
          onClick={() => setStatus(false)}
          disabled={!status}
        >
          Stop
        </button>
      </div>
    </div>
  )
}

export default ActiveCode
