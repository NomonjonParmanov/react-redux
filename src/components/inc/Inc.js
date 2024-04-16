import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../context/counter";

function Inc({ onResultChange }) {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kiritilgan qiymat:", number);
    onResultChange(parseInt(number));
    dispatch(increment());
    setNumber(0); // Input qiymatini 0 ga sozlash
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Qiymatni kiriting"
        />
        <button class="shrink-border" type="submit">
          Increment
        </button>
      </form>
    </div>
  );
}

export default Inc;
