import React from "react";
import "./App.css";
import ComponentA from "./reRender/components/componentA/ComponentA";
import DemoContextContainer from "./reRender/container/DemoContextContainer";
import TodoItem from "./ui/components/TodoItem";

function App() {
  return (
    <div className="App">
      <ComponentA param1={123}></ComponentA>
      <TodoItem text="just working code :)"></TodoItem>
      <DemoContextContainer></DemoContextContainer>
    </div>
  );
}

export default App;
