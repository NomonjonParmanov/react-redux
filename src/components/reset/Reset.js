import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../context/counter";

function Reset({ onReset }) {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset()); // Redux orqali reset amalini ishga tushirish
    onReset(); // input qiymatini 0 ga o'zgartirish
  };

  return (
    <div>
      <button className="reset" onClick={handleResetClick}>
        Reset
      </button>{" "}
      {/* Reset tugmasi */}
    </div>
  );
}

export default Reset;
