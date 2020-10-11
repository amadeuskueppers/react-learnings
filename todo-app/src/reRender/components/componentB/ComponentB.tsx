import React, { useContext } from "react";
import DemoContext from "../../demoContext/DemoContext";
import IComponentB from "./IComponentB";

const ComponentB: React.FC<IComponentB> = () => {
  const x = useContext(DemoContext);

  return (
    <React.Fragment>
      <h2>Ich bein ein Fragment ohne Div</h2>
      <p>value from DemoContext: {x.counter}</p>
    </React.Fragment>
  );
};

export default ComponentB;
