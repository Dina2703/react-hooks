import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  //And it's really important to understand that when you change a reference value, it does not render, the component as if you were to set a state value.

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    // inputRef.current.value = "You changed input text";
    inputRef.current.style.backgroundColor = "gray";
    paraRef.current.innerText = "Goodbye";
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={inputRef} type="text" className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
