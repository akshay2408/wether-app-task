import React, { useState, useEffect } from "react";
import Wether from "./wether";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Chat from "./Chat/chat";
import ChatRoom from "./ChatRoom/chatRoom";
import Navbar from "./Navbar/navbar";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <div className="App__container">
        <Switch>
            <Route path="/" component={Wether} exact />
            <Route path="/chat" component={Chat} />
            <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
