import React from "react";
import classes from "./Header.module.css";
import logo from "./../../res/logo.png";
import SearchIcon from "@material-ui/icons/Search";

export default function Header(props) {
  // const [input, setInput] = useState("");

  const inputHandler = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo"></img>
      </div>
      <div className={classes.search}>
        <input
          placeholder="search Hero"
          onChange={inputHandler}
        // value={input}
        />
        <SearchIcon className={classes.icon} />
      </div>
    </div>
  );
}
// onSearch
