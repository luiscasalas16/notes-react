import { useState, useEffect, useCallback, memo, ChangeEvent } from "react";

/*
useCallback is a React Hook that lets you cache a function definition between
re-renders.

const cachedFn = useCallback(fn, dependencies)

Parameters
  * fn: The function value that you want to cache. It can take any arguments and
  return any values. React will return (not call!) your function back to you
  during the initial render. On next renders, React will give you the same
  function again if the dependencies have not changed since the last render.
  Otherwise, it will give you the function that you have passed during the
  current render, and store it in case it can be reused later. React will not
  call your function. The function is returned to you so you can decide when and
  whether to call it.
  * dependencies: The list of all reactive values referenced inside of the fn
  code.

Returns
  * On the initial render, useCallback returns the fn function you have passed.
*/

//skip render with function parameter

const Example1 = () => {
  const [number, setNumber] = useState("0");
  const [isDark, setIsDark] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  const repaint = useCallback((result: number) => {
    console.log(result);
  }, []);

  return (
    <p style={isDark ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <span>skip render with function parameter:</span>
      &nbsp;
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        &nbsp;
        <span>Dark</span>
      </label>
      &nbsp;
      <input value={number} onChange={handleChange} />
      &nbsp;
      <Example1Aux number={number} repaint={repaint}></Example1Aux>
    </p>
  );
};

const Example1Aux = memo(({ number, repaint }: { number: string; repaint: (result: number) => void }) => {
  function calc(n: number): number {
    let startTime = performance.now();
    while (performance.now() - startTime < 750) {}
    return n * 2;
  }

  const result = calc(Number.parseInt(number));

  return (
    <>
      <span>result: {result}</span>
      &nbsp;
      <button className="btn btn-primary" onClick={() => repaint(result)}>
        repaint
      </button>
    </>
  );
});

//prevent effect fire with function dependency

const Example2 = () => {
  const [chat, setChat] = useState("Chat 1");

  return (
    <p>
      <span>prevent effect fire with function dependency:</span>
      &nbsp;
      <select
        value={chat}
        onChange={(e) => {
          setChat(e.target.value);
        }}>
        <option value="Chat 1">Chat 1</option>
        <option value="Chat 2">Chat 2</option>
        <option value="Chat 3">Chat 3</option>
      </select>
      &nbsp;
      <Example2Aux chat={chat}></Example2Aux>
    </p>
  );
};

const Example2Aux = ({ chat }: { chat: string }) => {
  const [repaintCounter, setRepaintCounter] = useState(0);

  const createParameters = useCallback(() => {
    console.log("execute create parameters");
    return {
      url: "http://localhost:12345",
      chat: chat,
    };
  }, [chat]);

  function createConnection() {
    console.log("execute create connection", createParameters());
  }

  function repaint() {
    setRepaintCounter(repaintCounter + 1);
    console.log("repaint");
  }

  useEffect(() => {
    createConnection();
  }, [createParameters]);

  return (
    <>
      <span>{chat}</span>
      &nbsp;
      <button className="btn btn-primary" onClick={() => repaint()}>
        repaint {repaintCounter}
      </button>
    </>
  );
};

//default

export const UseCallback = () => {
  return (
    <>
      <h2>Hooks / useCallback</h2>
      <hr />
      <Example1></Example1>
      <Example2></Example2>
    </>
  );
};
