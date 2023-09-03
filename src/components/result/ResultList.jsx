import React, { useState } from "react";
import styles from "./ResultList.module.css";

export const ResultList = (props) => {
  const valueHandler = (event) => {
    props.onDelete(event.target.id);
  };

  const list = props.values.map((value, index) => (
    <div key={index} id={value.id} className={styles.result}>
      {value.username} ({value.age} years old)
    </div>
  ));
  return <div onClick={valueHandler}>{list}</div>;
};
