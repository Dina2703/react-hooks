import { useState, useRef, useEffect } from "react";

//IMPORTANT! useRef never  re-renders the component!!!!

function MyExampleUseref() {
  const [name, setName] = useState("");
  //count renders with useRef, since with useState you can trigger infinite loop(every time value for state changes, component gets re-rendered)
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  }, [name]);

  //reference elements inside HTML, can use useRef for HTML elements(p, input, div, other)
  function focus() {
    inputRef.current.focus();
  }

  //useRef commonly used to store previous value of your state, with useState there is no way to get the prevState it's just always the value of state.

  return (
    <div>
      <h3>
        My name is {name} and used to be {prevName.current}
      </h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        Render{renderCount.current > 1 ? "s" : ""} {renderCount.current}
      </p>
      <button onClick={focus} className="btn btn-primary">
        Focus
      </button>
    </div>
  );
}

export default MyExampleUseref;
