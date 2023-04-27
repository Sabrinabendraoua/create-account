import { useState } from "react";

const form = () => {
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordBis, setPasswordBis] = useState("");

  return (
    <main>
      <h1>Create account</h1>
      {/*j'utilise l'attribut onSubmit car j'ai utilisé le button submit */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (password != passwordBis) {
            alert("Vos deux mots de passe sont différents");
          }
        }}
      >
        {/*j'utilise onChange pr que des que mon input change il se passe quelque chose */}
        <input
          valeur={lastname}
          type="text"
          placeholder="Sabrina Kessar"
          onChange={(event) => {
            setLastname(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input
          valeur={email}
          type="email"
          placeholder="Sabrina@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="123456"
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input
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
