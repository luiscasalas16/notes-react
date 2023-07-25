import { useState, useMemo, memo, ChangeEvent } from "react";

/*
useMemo is a React Hook that lets you cache the result of a calculation between
re-renders.

const cachedValue = useMemo(calculateValue, dependencies)

Parameters:
  * calculateValue: The function calculating the value that you want to cache. It
  should be pure, should take no arguments, and should return a value of any
  type. React will call your function during the initial render. On next renders,
  React will return the same value again if the dependencies have not changed
  since the last render. Otherwise, it will call calculateValue, return its
  result, and store it so it can be reused later.
  * dependencies: The list of all reactive values referenced inside of the
  calculateValue code.

Returns
  * On the initial render, useMemo returns the result of calling calculateValue
  with no arguments. During next renders, it will either return an already stored
  value from the last render (if the dependencies haven’t changed).
*/

//skip expensive calculations

const Example1 = () => {
  const [number, setNumber] = useState("0");
  const [isDark, setIsDark] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  return (
    <p style={isDark ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <span>skip expensive calculations:</span>
      &nbsp;
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        &nbsp;
        <span>Dark</span>
      </label>
      &nbsp;
      <input value={number} onChange={handleChange} />
      &nbsp;
      <Example1Aux s={number}></Example1Aux>
    </p>
  );
};

const Example1Aux = ({ s }: { s: string }) => {
  function calc(n: number): number {
    let startTime = performance.now();
    while (performance.now() - startTime < 750) {}
    return n * 2;
  }

  //useMemo
  const result = useMemo(() => calc(Number.parseInt(s)), [s]);

  return <span>result: {result}</span>;
};

//skip expensive render at component declare

const Example2 = () => {
  const [number, setNumber] = useState("0");
  const [isDark, setIsDark] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  return (
    <p style={isDark ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <span>skip expensive render at component declare:</span>
      &nbsp;
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        &nbsp;
        <span>Dark</span>
      </label>
      &nbsp;
      <input value={number} onChange={handleChange} />
      &nbsp;
      <Example2Aux s={number}></Example2Aux>
    </p>
  );
};

const Example2Aux = /*useMemo*/ memo(({ s }: { s: string }) => {
  function calc(n: number): number {
    let startTime = performance.now();
    while (performance.now() - startTime < 750) {}
    return n * 2;
  }

  const result = calc(Number.parseInt(s));

  return <span>result: {result}</span>;
});

//skip expensive render at component use

const Example3 = () => {
  const [number, setNumber] = useState("0");
  const [isDark, setIsDark] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  //useMemo
  const x = useMemo(() => <Example3Aux s={number}></Example3Aux>, [number]);

  return (
    <p style={isDark ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <span>skip expensive render at component use:</span>
      &nbsp;
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        &nbsp;
        <span>Dark</span>
      </label>
      &nbsp;
      <input value={number} onChange={handleChange} />
      &nbsp;
      {x}
    </p>
  );
};

const Example3Aux = ({ s }: { s: string }) => {
  function calc(n: number): number {
    let startTime = performance.now();
    while (performance.now() - startTime < 750) {}
    return n * 2;
  }

  const result = calc(Number.parseInt(s));

  return <span>result: {result}</span>;
};

//default

export const UseMemo = () => {
  return (
    <>
      <h2>Hooks / useMemo</h2>
      <hr />
      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>
    </>
  );
};
