import React, { useState } from "react";
import styles from "./ResultList.module.css";

export const ResultList = (props) => {

    const valueHandler = (event) => {
        props.onDelete(event.target.id);
    }

  const list = props.values.map((value, index) => (
    <div key={index} id={value.id}>
      {value.username} ({value.age} years old)
    </div>
  ));
  return <div className={styles.result} onClick={valueHandler}>{list}</div>;
};
