import { useState } from "react";

function App() {
  return <div> </div>;
}
const Changecolor = () => {
  const [color, setCount] = useState({});

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span> {count} </span> <button onClick={onIncrease}>Increase </button>{" "}
    </div>
  );
};

const Person = () => {
  const [person, setPerson] = useState({
    name: "MindX",
    age: 7,
  });
  const onIncrease = () => {
    setPerson({
      ...person,
      age: person.age + 1,
    });
  };
  return (
    <div>
      <p>
        hello, my name {person.name}.toi {person.age}{" "}
      </p>{" "}
      <button onClick={onIncrease}> Increase Age </button>{" "}
    </div>
  );
};

export default App;
