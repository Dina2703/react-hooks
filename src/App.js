import "./App.css";
import CustomHookExample2 from "./components/CustomHookExample2";

import FetchDataWithUSeFetch from "./components/FetchDataWithUSeFetch";
import PrevState from "./components/PrevState";
import UseRefExample1 from "./components/UseRefExample1";
import UserefExample2 from "./components/UserefExample2";
import UseRefMemoryLeak from "./components/UseRefMemoryLeak";
import MyExampleUseref from "./components/MyExampleUseref";

function App() {
  return (
    <div className="container my-5">
      <h3>More Advanced React Hooks</h3>
      <UseRefExample1 />
      <UserefExample2 />
      <PrevState />
      <UseRefMemoryLeak />
      <FetchDataWithUSeFetch />
      <CustomHookExample2 />
      <MyExampleUseref />
    </div>
  );
}

export default App;
