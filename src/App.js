import React, { useState, useEffect } from "react";
import Wether from "./wether";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/shop">Shop Now </Link>
      </div>
      <div className="App__container">
        <Wether />
      </div>
    </div>
  );
}
