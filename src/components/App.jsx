import React, { useState } from "react";

function App() {
  //destructuring useState
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }
  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname}
        {lname}
      </h1>
      <form>
        <input
          name="fname"
          onChange={updateFName}
          placeholder="First Name"
          value={fname}
        />
        <input
          name="lname"
          onChange={updateLName}
          placeholder="Last Name"
          value={lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
