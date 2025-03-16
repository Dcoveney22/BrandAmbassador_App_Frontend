import "./App.css";

async function App() {
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
