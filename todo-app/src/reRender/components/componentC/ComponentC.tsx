import React, { useState } from "react";
import IDemoContext from "../../demoContext/IDemoContext";
import IComponentC from "./IComponentC";

const ComponentC: React.FC<IComponentC> = ({ numericValue }) => {
  const [contextValue, setContextValue] = useState<IDemoContext>({
    counter: numericValue,
  });

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h2>I am Component C</h2>
      <input
        value={contextValue.counter}
        type="number"
        onChange={(e) => {
          setContextValue({ counter: +e.target.value });
        }}
      ></input>
    </div>
  );
};

export default ComponentC;
