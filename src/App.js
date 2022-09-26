import React, { useEffect, useState } from 'react'
import ActiveCode from './components/activeCode/ActiveCode'
import KeyTable from './components/keyTable/KeyTable'
import Address from './components/address/Address'
import './App.css'

function dateComponentPad(value) {
  var format = String(value)

  return format.length < 2 ? '0' + format : format
}

function formatDate(date) {
  var datePart = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(
    dateComponentPad,
  )
  var timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(
    dateComponentPad,
  )

  return datePart.join(':') + ' ' + timePart.join(':')
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const App = () => {
  const [runtime, setRuntime] = useState(10)
  const [btnStatus, setBtnStatus] = useState(false)
  const [codeStatus, setCodeStatus] = useState(false)
  const [data, setData] = useState([])
  const [label, setLabel] = useState('')
  const [info, setInfo] = useState('')

  useEffect(() => {
    let interval = null

    if (codeStatus) {
      interval = setInterval(() => {
        setRuntime((prev) => (prev += 1))
      }, 1)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [codeStatus])

  useEffect(() => {
    let interval = null

    if (codeStatus) {
      interval = setInterval(() => {
        const key = getRndInteger(1000000000, 9999999999)
        const address = getRndInteger(1000000000, 9999999999)

        setData([{ key, address }, ...data])
      }, 8000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [codeStatus, data])

  const handleEdit = () => {
    setTimeout(() => {
      const result = `[${formatDate(new Date())}] Your code is active.`

      setLabel(result)
      setInfo('Your code is active.')
      setData([])
    }, 5000)
  }

  return (
    <div className="container">
      <ActiveCode
        runtime={runtime}
        setRuntime={setRuntime}
        btnStatus={btnStatus}
        setBtnStatus={setBtnStatus}
        setCodeStatus={setCodeStatus}
        handleEdit={handleEdit}
      />
      <KeyTable
        data={data}
        setBtnStatus={setBtnStatus}
        setCodeStatus={setCodeStatus}
      />
      <Address label={label} info={info} data={data} />
    </div>
  )
}

export default App
