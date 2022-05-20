import "./App.css";
import FetchDataWithUSeFetch from "./components/FetchDataWithUSeFetch";
import PrevState from "./components/PrevState";
import UseRefExample1 from "./components/UseRefExample1";
import UserefExample2 from "./components/UserefExample2";
import UseRefMemoryLeak from "./components/UseRefMemoryLeak";

function App() {
  return (
    <div className="container mt-5">
      <h3>More Advanced React Hooks</h3>
      <UseRefExample1 />
      <UserefExample2 />
      <PrevState />
      <UseRefMemoryLeak />
      <FetchDataWithUSeFetch />
    </div>
  );
}

export default App;
