import React, { useState, useEffect } from "react";
import Wether from "./wether";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Wether />
      </div>
    </div>
  );
}
