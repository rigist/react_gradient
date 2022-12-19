import React, { useState } from "react";

import "./styles.css";

export function App2() {
  console.log("App2");
  // const [one, setOne] = useState("red");
  // const [two, setTwo] = useState("green");

  const [values, setValues] = useState({
    one: "red",
    two: "green",
    qwerty: "yellow",
  });

  const [grad, setGrad] = useState(["white"]);

  // function changeOne(e) {
  //   setOne(e.target.value);
  // }

  // function changeTwo(e) {
  //   setTwo(e.target.value);
  // }

  function changeInput(e) {
    // let obj = {
    //   one: e.target.name === "one" ? e.target.value : values.one,
    //   two: e.target.name === "two" ? e.target.value : values.two,
    // };

    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function changeColor(e) {
    e.preventDefault();
    setGrad(Object.values(values));
    // setGrad([ one, two]);
  }

  function changeClear() {
    // let arr = Object.keys(values);
    // let obj = {};
    // for (const item of arr) {
    //   obj[item] = "";
    // }

    // let arr2 = Object.keys(values);
    // let obj2 = {};

    // let arr3 = arr2.map((item) => [item, ""]);

    // let obj3 = Object.fromEntries(arr3);

    setValues((prev) => {
      return Object.fromEntries(Object.keys(prev).map((item) => [item, ""]));
    });
  }

  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(${grad.join(",")} )`,
        height: 500,
      }}
    >
      <form onSubmit={changeColor}>
        {Object.keys(values).map((item) => {
          return (
            <input
              name={`${item}`}
              value={values[item]}
              onChange={changeInput}
            />
          );
        })}
        {/* <input name={"one"} value={values.one} onChange={changeInput} />
        <input name={"two"} value={values.two} onChange={changeInput} /> */}
        <button type="submit">go</button>
        <button type="button" onClick={changeClear}>
          clear
        </button>
      </form>
    </div>
  );
}
