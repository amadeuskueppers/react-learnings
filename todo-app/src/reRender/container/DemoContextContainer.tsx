import React, { useState } from "react";
import ComponentB from "../components/componentB/ComponentB";
import ComponentC from "../components/componentC/ComponentC";
import DemoContext from "../demoContext/DemoContext";
import IDemoContext from "../demoContext/IDemoContext";
import IDemoContextContainer from "./IDemoContextContainer";

const DemoContextContainer: React.FC<IDemoContextContainer> = () => {
  const [contextValue, setContextValue] = useState<IDemoContext>({
    // sets the initial value
    counter: 0,
  });

  return (
    <DemoContext.Provider value={contextValue}>
      <div style={{ background: "yellow" }}>
        <button
          onClick={() => {
            console.log("will increment counter..");
            setContextValue({ counter: ++contextValue.counter });
          }}
        >
          Increment counter
        </button>
      </div>
      <ComponentB></ComponentB>
      <ComponentC numericValue={contextValue.counter}></ComponentC>
    </DemoContext.Provider>
  );
};

export default DemoContextContainer;
