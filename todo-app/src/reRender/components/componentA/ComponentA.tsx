import React from "react";
import IComponentA from "./IComponentA";

const ComponentA: React.FC<IComponentA> = (props) => {
  const param1 = props.param1;

  return <div>Param of ComponentA = {`${param1}`}</div>;
};

export default ComponentA;
