import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordBis, setPasswordBis] = useState("");
  const [result, setResult] = useState(false);

  return (
    <div>
      {result === false ? (
        <Form />
      ) : (
        <Result
          lastname={lastname}
          email={email}
          password={password}
          setResult={setResult}
        />
      )}
      <Footer />
    </div>
  );
};
export default App;
