import React, { useState } from "react";
import styles from "./NewUserForm.module.css";

export const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newValue = {
      id: Math.random(),
      username,
      age,
    };
    props.onAdd(newValue);
  };
  return (
    <form onSubmit={submitHandler} className={styles.user}>
      <label htmlFor="username">Username</label>
      <input onChange={usernameHandler} value={username} id="username" type="text"></input>
      <label htmlFor="username">Age (Years)</label>
      <input
        onChange={ageHandler}
        type="number"
        value={age}
        id="username"
      ></input>
      <button type="submit">Add User</button>
    </form>
  );
};
