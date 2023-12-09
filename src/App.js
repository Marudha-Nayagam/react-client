import { AddTodo } from "./AddTodo.jsx";
import "./App.css";
import {GetTodo} from "./GetTodo.jsx"



function App() {
  return (
    <div className="App">
      <GetTodo />
      <AddTodo />
    </div>
  );
}

export default App;


