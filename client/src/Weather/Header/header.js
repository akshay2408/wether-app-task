import React from "react";
import Search from "../Search/search";
import "./header.css";

export default function Header({ callBack }) {
  return (
    <header className="Header">
      <h1 className="Header__title"> Weather </h1>
      <Search callBack={callBack} />
    </header>
  );
}
