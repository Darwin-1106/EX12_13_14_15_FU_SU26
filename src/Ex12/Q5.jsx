import { useState } from "react";

function Q5() {
  const [bgColor, setBgColor] = useState("");

  return (
    <div>
      <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: bgColor,
          border: "1px solid #ccc",
          marginTop: "10px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto",
        }}
      />
    </div>
  );
}

export default Q5;
