import React from "react";
import classes from "./Header.module.css";
import logo from "./../../res/logo.png";

export default function Header(props) {

  const inputHandler = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo"></img>
      </div>
      <h1>Hall Of Techies</h1>
      <div className={classes.search}>
        <input
          placeholder="Search here"
          onChange={inputHandler}
        // value={input}
        />
      </div>
    </div>
  );
}
// onSearch
