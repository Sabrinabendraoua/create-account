import { useState } from "react";

const form = () => {
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordBis, setPasswordBis] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordBis) {
      alert("Vos mots de passe ne sont pas identiques");
    }
  };
  return (
    <main>
      {/*j'utilise l'attribut onSubmit car j'ai utilisé le button submit */}
      <form onSubmit={handleSubmit}>
        <h1>Create account</h1>
        {/*j'utilise onChange pr que des que mon input change il se passe quelque chose */}
        <label htmlFor="lastname">Name</label>
        <input
          id="lastname"
          value={lastname}
          type="text"
          placeholder="Sabrina Kessar"
          onChange={(event) => {
            setLastname(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          type="email"
          placeholder="Sabrina@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={password === passwordBis ? "" : "red"}
          type="password"
          placeholder="123456"
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label htmlFor="passwordBis">Password à confirmer</label>
        <input
          id="passwordBis"
          className={password === passwordBis ? "" : "red"}
          type="password"
          placeholder="123456"
          onChange={(event) => {
            setPasswordBis(event.target.value);
            console.log(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </main>
  );
};
export default form;
