import React from "react";
import { useSelector } from "react-redux";
function Result({ result }) {
  let count = useSelector((state) => state.counter.value);
  console.log(count);
  return (
    <div>
      <h1>
        Result = <span>{result}</span>
      </h1>
    </div>
  );
}
export default Result;
