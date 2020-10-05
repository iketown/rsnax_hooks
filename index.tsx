import React, { Component } from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Button from "./src/components/Button";
const App: React.FC = () => {
  return (
    <div>
      hey everybody
      <Button>im a button</Button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
