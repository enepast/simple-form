import React from "react";
import styles from "./ErrorOverlay.module.css";

export const ErrorOverlay = (props) => {
  const returnHandler = () => {
    props.onClick();
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-title"]}>Invalid Input</div>
        <p>{props.errorMessage}</p>
        <button onClick={returnHandler}>Okay</button>
      </div>
    </div>
  );
};