import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Card from "./../UI/Card/Card";
import classes from "./Home.module.css";
import Pagination from "@material-ui/lab/Pagination";
import data from "../upload/data";


export default function Home() {
  const [pageNo, setPageNo] = useState(1);
  const [dataArr, setDataArr] = useState([]);
  let pageSize = 6;


  useEffect(() => {
    let newArr = data.slice((pageNo - 1) * pageSize, pageNo * pageSize);
    setDataArr(newArr);
  }, [pageNo, pageSize]);

  const searchHandler = (input) => {
    const newArr = [];
    data.forEach((el) => {
      if (el.name.toLowerCase().startsWith(input.toLowerCase())) {
        newArr.push(el);
      }
    });
    setDataArr(newArr);
  };

  const showData = () => {
    if (dataArr.length < 1) {
      return <h1 className={classes.nodata}>No Data Found</h1>
    }
    return dataArr.map((el) => (<Card userData={el} key={Math.floor(Math.random() * 10000) + `${el.userName}`} />
    ));
  };

  const paginationHandler = (e, p) => {
    setPageNo(p);
  };



  return (
    <div className={classes.home}>
      <Header onSearch={searchHandler} />
      <div className={classes.content}>{showData()}</div>
      <div className={classes.pagination}>
        <Pagination
          // count={10}
          count={Math.ceil(data.length / pageSize)}
          color="primary"
          size="large"
          onChange={paginationHandler}
        />
      </div>
    </div>
  );
}
