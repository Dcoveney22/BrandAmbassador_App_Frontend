import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

async function App() {
  const [count, setCount] = useState(0);
  const response = await fetch("http://localhost:3000/stockSheet");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
export default App;
