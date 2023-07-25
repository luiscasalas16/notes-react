import { ChangeEvent, useState } from "react";
import { User } from "./interfaces";

/*
useState is a React Hook that lets you add a state variable to your component.

const [state, setState] = useState(initialState);

Parameters
  * initialState: The value you want the state to be initially. It can be a value
  of any type, but there is a special behavior for functions. This argument is
  ignored after the initial render.

Returns
  * The current state.
  * The set function that lets you update the state to a different value and
  trigger a re-render.
*/

//basic

const Example1 = () => {
  //inferred type
  const [state1] = useState("inferred type");
  //explicit type
  const [state2] = useState<string>("explicit type");
  //object null
  const [state3] = useState<User | null>(null);
  //object empty
  const [state4] = useState<User>({} as User);

  return (
    <p>
      <span>1 basic:</span>
      &nbsp;
      <span>{state1}</span>
      &nbsp;
      <span>{state2}</span>
      &nbsp;
      <span>null state : {JSON.stringify(state3)}</span>
      &nbsp;
      <span>empty init : {JSON.stringify(state4)}</span>
      &nbsp;
    </p>
  );
};

//init and set

const Example2 = () => {
  //value init
  const [count1, setCount1] = useState(0);
  //function init
  //  init() call on every render
  //  init call only initialization
  const [count2, setCount2] = useState(init);

  function init() {
    console.log("init");
    return 0;
  }

  function handleClick1() {
    //value set (does not update the state)
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  }

  function handleClick2() {
    //function set (does update the state)
    setCount2((n) => n + 1);
    setCount2((n) => n + 1);
  }

  return (
    <p>
      <span>2 init and set:</span>
      &nbsp;
      <button className="btn btn-primary" onClick={handleClick1}>
        value {count1}
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={handleClick2}>
        function {count2}
      </button>
    </p>
  );
};

//input

const Example3 = () => {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <p>
      <span>3 input:</span>
      &nbsp;
      <input value={text} onChange={handleChange} />
      &nbsp;
      <span>{text}</span>
    </p>
  );
};

//object

const Example4 = () => {
  const [user, setUser] = useState<User>({ firstName: "", lastName: "" } as User);

  function handleChange1(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, firstName: e.target.value });
  }
  function handleChange2(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, lastName: e.target.value });
  }

  return (
    <p>
      <span>4 object:</span>
      &nbsp;
      <input value={user.firstName} onChange={handleChange1} />
      &nbsp;
      <input value={user.lastName} onChange={handleChange2} />
      &nbsp;
      <span>{user.firstName}</span>
      &nbsp;
      <span>{user.lastName}</span>
    </p>
  );
};

//reset key

const Example5A = () => {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <span>5 reset key:</span>
      &nbsp;
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
      &nbsp;
      <Example5B key={version} />
    </>
  );
};

const Example5B = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      &nbsp;
      <span>{name}</span>
    </>
  );
};

//default

export const UseState = () => {
  return (
    <>
      <h2>Hooks / useState</h2>
      <hr />
      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>
      <Example4></Example4>
      <Example5A></Example5A>
    </>
  );
};
