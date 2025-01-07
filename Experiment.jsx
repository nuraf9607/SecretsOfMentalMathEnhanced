import { useState } from "react";

const Experiment = () => {
  const [counters, setCounters] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  });

  // Function to handle increment and decrement
  const handleChange = (counter, change) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counter]: Math.max(prevCounters[counter] + change, 0), // Prevent negative values
    }));
  };

  // Reset all counters to 0
  const reset = () => {
    setCounters({
      count1: 0,
      count2: 0,
      count3: 0,
    });
  };

  return (
    <div className="grid gap-2 p-4">
      {Object.keys(counters).map((counter) => (
        <div key={counter}>
          <span className="mr-4">{counters[counter]}</span>
          {counter}:{" "}
          <button
            className="border p-3 mr-4"
            onClick={() => handleChange(counter, 1)}
          >
            Increment
          </button>
          <button onClick={() => handleChange(counter, -1)}>Decrement</button>
        </div>
      ))}
      <div>
        <button onClick={reset}>Reset</button>
      </div>
     
    </div>
  );
};

export default Experiment;
