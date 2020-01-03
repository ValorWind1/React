import React, { useState } from "react";
import Person from "./Person/Person";
// useState return an array with exatcly 2 elements (always 2 elements )
// first element will always be our current state
// second element will always be a function that allows to update the state .
const Hoks = props => {
  const [personsState, setPersonsState] = useState({
    people: [
      { name: "Max", age: 27 },
      { name: "Braun", age: 25 },
      { name: "steph", age: 23 }
    ],
    otherState: "other value"
  });

  const switchNameHandler = () => {
    // console.log('Was Clicked')
    setPersonsState({
      people: [
        { name: "Maximilian", age: 27 },
        { name: "Braun", age: 25 },
        { name: "steph", age: 20 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello World !</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.people[0].name}
        age={personsState.people[0].age}
      />
      <Person
        name={personsState.people[1].name}
        age={personsState.people[1].age}
      >
        {" "}
        My Hobbies : Flying{" "}
      </Person>
      <Person
        name={personsState.people[2].name}
        age={personsState.people[2].age}
      />
    </div>
  );
};

export default Hoks;
