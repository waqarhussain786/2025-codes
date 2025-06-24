import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = evaluate(input);
        setInput(result.toString());
      } catch (err) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-72">
        <div className="mb-4 text-right bg-gray-200 text-2xl p-3 rounded">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className={`p-3 text-xl font-bold rounded ${
                btn === "="
                  ? "bg-blue-500 text-white"
                  : btn === "C"
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-800"
              } hover:opacity-80 transition`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;