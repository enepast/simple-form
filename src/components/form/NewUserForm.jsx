import React, { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <label>Username</label>
      <input onChange={usernameHandler} value={username}></input>
      <label>Age (Years)</label>
      <input onChange={ageHandler} type="number" value={age}></input>
      <button type="submit">Add User</button>
    </form>
  );
};
