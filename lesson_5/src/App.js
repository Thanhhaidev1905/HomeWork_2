import {useState} from "react";
function App() {
  return (
    <div>
      <Counter />
      <Person />
    </div>

  );
}
const Counter =()=>{
  const [count,setCount] = useState(0)

  const onIncrease = ()=>{
    setCount(count +1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrease}>
        Increase
      </button>
    </div>
  );
};

const Person =() =>{
  const [person, setPerson] = useState({
    name: "MindX",
    age: 7,
  });
  const onIncrease = ()=>{
    setPerson({
      ...person,
      age: person.age + 1,
    });
  };
  return(
    <div>
      <p>
        hello, my name{person.name}.toi {person.age}
      </p>
      <button onClick={onIncrease}>Increase Age</button>
    </div>
  )
}
const Changecolor=() => {


  const onColor= () =>{
    const [color,setColor]= useState({Math.random})
    return
  }
  return(
    <div className="App">
      <div className="changeColor"> change color</div>
      <button onClick={onIncrease}>click here</button>
    </div>
  )
}

export default App;
