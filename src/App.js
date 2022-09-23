import React, { useEffect, useState } from 'react'
import ActiveCode from './components/activeCode/ActiveCode'
import KeyTable from './components/keyTable/KeyTable'
import Address from './components/address/Address'
import './App.css'

const App = () => {
  const [runtime, setRuntime] = useState(10)
  const [status, setStatus] = useState(false)
  const [keys, setKeys] = useState([])

  useEffect(() => {
    let interval = null

    if (status) {
      interval = setInterval(() => {
        setRuntime((prev) => (prev += 1))
      }, 1)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [status])

  useEffect(() => {
    let interval = null

    if (status) {
      interval = setInterval(() => {
        setKeys([Math.random(1), ...keys])
      }, 8000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [status, keys])

  return (
    <div className="container">
      <ActiveCode
        runtime={runtime}
        setRuntime={setRuntime}
        status={status}
        setStatus={setStatus}
      />
      <KeyTable keys={keys} setStatus={setStatus} />
      <Address addresses={keys} />
    </div>
  )
}

export default App
