import React, { useState } from "react";
const Inputfield = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(name, email);
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
  };
  return (
    <>
      <form onSubmit={handleChange}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Inputfield;
