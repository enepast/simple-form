import { useState } from "react";
import "./App.css";
import { NewUserForm } from "./components/form/NewUserForm";
import { ResultList } from "./components/result/ResultList";

const DUMMY_VALUES = [
  {
    id: 1,
    username: "Dario",
    age: 30,
  },
  {
    id: 2,
    username: "Opticenter",
    age: 25,
  },
  {
    id: 3,
    username: "Mauricio",
    age: 28,
  },
  {
    id: 4,
    username: "Patricio",
    age: 28,
  },
];

function App() {
  const [values, setValues] = useState(DUMMY_VALUES);

  const addValueHandler = (newValue) => {
    setValues((prevValues) => [newValue, ...prevValues]);
    console.log(values);
  };
  const deleteValueHandler = (id) => {
    console.log("eliminame este id: " + id);
    setValues(values.filter((value) => value.id != id));
  };

  return (
    <>
      <div>
        <NewUserForm onAdd={addValueHandler} />
      </div>
      <div>
        <ResultList values={values} onDelete={deleteValueHandler} />
      </div>
    </>
  );
}

export default App;
