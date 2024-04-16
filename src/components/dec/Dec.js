import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../context/counter";

function Dec({ onResultChange, result }) {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onResultChange(parseInt(number));
    dispatch(decrement());
    setNumber(0);
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
        <button
          class="material-bubble"
          onClick={() => dispatch(decrement())}
          disabled={result <= 0}
        >
          Decrement
        </button>
      </form>
    </div>
  );
}

export default Dec;
