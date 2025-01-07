import React, { useState } from "react";

function ButtonList() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const handleClick = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  return (
    <div>
      {counts.map((count, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          Button {index + 1} clicked {count} times
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
