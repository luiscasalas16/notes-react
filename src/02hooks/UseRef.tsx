import { useState, useRef } from "react";

/*
useRef is a React Hook that lets you reference a value that’s not needed for
rendering.

const ref = useRef(initialValue)

Parameters
  * initialValue: The value you want the ref object’s current property to be
  initially. It can be a value of any type. This argument is ignored after the
  initial render.

Returns
  * Returns an object with a single property current, initially, it’s set to the
  initialValue you have passed. You can later set it to something else. If you
  pass the ref object to React as a ref attribute to a JSX node, React will set
  its current property.On the next renders, useRef will return the same object.
*/

//reference value

const UseRef1 = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  function handleStart() {
    setCounter(0);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCounter((s) => s + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <p>
      <span>reference value: {counter}</span>
      &nbsp;
      <button className="btn btn-primary" onClick={handleStart}>
        Start
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={handleStop}>
        Stop
      </button>
    </p>
  );
};

//reference DOM

const UseRef2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <p>
      <span>reference DOM:</span>
      &nbsp;
      <input ref={inputRef} />
      &nbsp;
      <button className="btn btn-primary" onClick={handleClick}>
        Focus
      </button>
    </p>
  );
};

//manage ref

const UseRef3 = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  if (intervalRef.current === undefined) {
    intervalRef.current = setInterval(() => {
      setCounter((s) => s + 1);
    }, 1000);
  }
  return (
    <p>
      <span>manage ref: {counter}</span>
    </p>
  );
};

//default

export const UseRef = () => {
  return (
    <>
      <h2>Hooks / useRef</h2>
      <hr />
      <UseRef1></UseRef1>
      <UseRef2></UseRef2>
      <UseRef3></UseRef3>
    </>
  );
};
