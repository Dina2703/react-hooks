import { useState } from "react";
import Todo from "./Todo";

function UseRefMemoryLeak() {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      <h3>➡️ Example 3. useRef hook to fix 'Memory Leak' error.</h3>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default UseRefMemoryLeak;
