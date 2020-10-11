import React from "react";
import IDemoContext from "./IDemoContext";

const initialCounterValue = 1;

const DemoContext = React.createContext<IDemoContext>({
  counter: initialCounterValue,
});

export default DemoContext;
