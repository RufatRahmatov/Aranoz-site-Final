import React, { useState } from "react";

export default function PriceFilter() {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000);
  const [previousValue, setPreviousValue] = useState<number>(0);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > maxValue) {
      setMaxValue(value);
    }
    setMinValue(value);
    setPreviousValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value < minValue) {
      setMinValue(value);
    }
    setMaxValue(value);
    setPreviousValue(value);
  };

  return (
    <div className="w-64 p-4">
      <h3 className="font-bold mb-4">Price Filter</h3>

      {/* Conditional Rendering of Text */}
      {maxValue < 500 && (
        <div className="text-gray-700 mb-2">
          tk. {minValue} - tk. {maxValue}
        </div>
      )}

      <input
        type="range"
        min="0"
        max="1000"
        value={minValue}
        onChange={handleMinChange}
        className="slider appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
        style={{
          background: `linear-gradient(to right, #FF4380 ${
            ((minValue - 0) / (1000 - 0)) * 100
          }%, #E0E0E0 0%)`,
        }}
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={maxValue}
        onChange={handleMaxChange}
        className="slider appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-2"
        style={{
          background: `linear-gradient(to right, #FF4380 ${
            ((maxValue - 0) / (1000 - 0)) * 100
          }%, #E0E0E0 0%)`,
        }}
      />
      <div className="mt-4 text-lg">
        Price: <span>{minValue}</span> to <span>{maxValue}</span>
      </div>
    </div>
  );
}
