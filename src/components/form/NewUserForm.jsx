import React, { useState } from "react";
import styles from "./NewUserForm.module.css";
import { ErrorOverlay } from "./ErrorOverlay";

export const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age <= 0) {
      overlayHandler("Please enter a valid name and age (non-empty values).");
      return;
    }
    if (username.trim().length === 0) {
      overlayHandler("Please enter a valid username (field can't be empty).");
      return;
    }
    if (age <= 0) {
      overlayHandler("Please enter a valid age (>0).");
      return;
    } else {
      const newValue = {
        id: Math.random(),
        username,
        age,
      };
      props.onAdd(newValue);
    }
  };

  const overlayHandler = (message) => {
    setIsError(true);
    setMessage(message);
  };
  const acceptButtonHandler = () => {
    setIsError(false);
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className={styles.user}
        onError={overlayHandler}
      >
        <label htmlFor="username">Username</label>
        <input
          onChange={usernameHandler}
          value={username}
          id="username"
          type="text"
        ></input>
        <label htmlFor="username">Age (Years)</label>
        <input
          onChange={ageHandler}
          type="number"
          value={age}
          id="username"
        ></input>
        <button type="submit">Add User</button>
      </form>
      {isError ? (
        <ErrorOverlay onClick={acceptButtonHandler} errorMessage={message} />
      ) : (
        ""
      )}
    </>
  );
};
