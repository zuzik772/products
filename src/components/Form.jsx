import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function nameChanged(e) {
    setName(e.target.value);
  }
  function emailChanged(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={nameChanged} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={emailChanged} />
      </form>
      <button>stupid form</button>
    </>
  );
}
