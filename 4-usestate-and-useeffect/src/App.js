import React, { useCallback, useState } from "react";
import DataDisplayer from "./DataDisplayer";

export default function App() {
  const [currentId, setCurrentId] = useState(1);
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  const decreaseCount = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  const handleClick = () => {
    const idToFetch = Math.round(Math.random() * 80);
    setCurrentId(idToFetch);
  };

  return (
    <React.Fragment>
      <div>
        <p>Number of active requests: {count}</p>
        <p>Requesting ID: {currentId}</p>
        <button type="button" onClick={handleClick}>
          Fetch data!
        </button>
      </div>
      <hr />
      <DataDisplayer
        id={currentId}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </React.Fragment>
  );
}
