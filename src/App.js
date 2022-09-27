import React, { useEffect, useState } from "react";
import ActiveCode from "./components/activeCode/ActiveCode";
import KeyTable from "./components/keyTable/KeyTable";
import Address from "./components/address/Address";
import { DATA } from "./data";
import "./App.css";

function dateComponentPad(value) {
  var format = String(value);

  return format.length < 2 ? "0" + format : format;
}

function formatDate(date) {
  var datePart = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(
    dateComponentPad
  );
  var timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(
    dateComponentPad
  );

  return datePart.join(":") + " " + timePart.join(":");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const [runtime, setRuntime] = useState(10);
  const [btnStatus, setBtnStatus] = useState(false);
  const [codeStatus, setCodeStatus] = useState(false);
  const [data, setData] = useState([]);
  const [label, setLabel] = useState("");
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState(false);
  const [activeCode, setActiveCode] = useState("");
  const [copies, setCopies] = useState([]);

  useEffect(() => {
    let interval = null;

    if (codeStatus) {
      interval = setInterval(() => {
        setRuntime((prev) => (prev += 1));
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [codeStatus]);

  useEffect(() => {
    let interval = null;

    const found = DATA.filter((e) => e["Acitive Code"] === activeCode);
    if (codeStatus && found.length > 0) {
      interval = setInterval(() => {
        const randomIndex = getRndInteger(0, found.length - 1);
        const key = found[randomIndex]["Key"];
        const address = found[randomIndex]["Address TRX"];

        setData([{ key, address }, ...data]);
      }, 8000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [codeStatus, data, activeCode]);

  const handleEdit = () => {
    const found = DATA.find((e) => e["Acitive Code"] === activeCode);
    if (found) {
      setInfo((prevArray) => [
        ...prevArray,
        ...[
          `[${formatDate(new Date())}] 系统开始 激活你的号码....`,
          `[${formatDate(new Date())}] 激活中 请稍等....`,
        ],
      ]);
      setBtnStatus(true);
      setTimeout(() => {
        const result = `[${formatDate(
          new Date()
        )}] 你的号码已经 激活成功、点击开始程序运行`;
        setInfo((prevArray) => [...prevArray, result]);

        setData([]);
        setActive(true);
      }, 5000);
      return;
    }

    alert("Code not found");
  };

  return (
    <div className="container">
      <ActiveCode
        runtime={runtime}
        setRuntime={setRuntime}
        btnStatus={btnStatus}
        setBtnStatus={setBtnStatus}
        setCodeStatus={(value) => {
          setInfo((prevArray) => [
            ...prevArray,
            ...[`[${formatDate(new Date())}] 系统开始运行、请耐心稍等`],
          ]);
          setCodeStatus(value);
        }}
        handleEdit={handleEdit}
        setActiveCode={setActiveCode}
        activeCode={activeCode}
        active={active}
      />
      <KeyTable
        data={data}
        setCodeStatus={setCodeStatus}
        copies={copies}
        setCopies={setCopies}
        setInfo={() => {
          setInfo((prevArray) => [
            ...prevArray,
            `[${formatDate(new Date())}] 请保存 秘钥 和 地址 `,
          ]);
        }}
      />
      <Address label={label} info={info} data={copies} />
    </div>
  );
};

export default App;
