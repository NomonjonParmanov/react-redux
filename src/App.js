import { useState } from "react";
import Dec from "./components/dec/Dec";
import Inc from "./components/inc/Inc";
import Reset from "./components/reset/Reset";
import Result from "./components/result/Result";
import "./sass/global.scss";

function App() {
  const [result, setResult] = useState(0);

  const handleResultChange = (newValue) => {
    setResult((prevResult) => prevResult + newValue);
  };
  const handleResult = (newValue) => {
    setResult((prevResult) => prevResult - newValue);
  };
  const handleReset = () => {
    setResult(0);
  };

  return (
    <div className="container">
      <Result result={result} />
      <Inc onResultChange={handleResultChange} />
      <Dec onResultChange={handleResult} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
