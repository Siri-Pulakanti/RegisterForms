import "./styles.css";
import Form from "./Form";
import { useState } from "react";

export default function App() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  return (
    <div className="App">
      <Form isUserRegistered={isUserRegistered} />
    </div>
  );
}
