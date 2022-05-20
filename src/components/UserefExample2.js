import { useRef, useState, useEffect } from "react";

function UserefExample2() {
  const [name, setName] = useState("");

  const renders = useRef(1);

  //get previous state
  const prevName = useRef("");
  // console.log(renders.current);
  useEffect(() => {
    console.log(renders.current);
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h2>Renders: {renders.current}</h2>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UserefExample2;
