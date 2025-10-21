import React, { useState } from 'react';

function Component() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(1);
  const [student, setStudent] = useState(true);

  const updateName = () => {
    setName("Abdo");
  };

  const increaseAge = () => {
    setAge(age + 1);
  };
  const decreaseAge = () => {
    setAge(age - 1);
    if (age <= 1) {
      setAge(1);
    }
  };

  const updateState = (e) => {
    setStudent(!student);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>Your age is {age}</h2>
      <h3>Are you a student? {student ? "Yes" : "No"}</h3>

      <button onClick={updateName}>Set name</button>
      <button onClick={increaseAge}>Increase age</button>

      <button onClick={decreaseAge}>decrease age</button>
      <button onClick={updateState}>Toggle Student Status</button>
    </div>
  );
}

export default Component;
