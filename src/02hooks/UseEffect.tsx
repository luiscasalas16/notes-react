import { useState, useEffect, useRef, ChangeEvent } from "react";
import { User } from "./interfaces";

/*
useEffect is a React Hook that lets you synchronize a component with an external system.

useEffect
(
  //setup function
  () => {
    //clean function ?
    return () => {
    };
  },
  dependencies ?
)

Parameters
  * setup: The function with your Effect’s logic. Your setup function may also
  optionally return a cleanup function. When your component is added to the DOM,
  React will run your setup function. After every re-render with changed
  dependencies, React will first run the cleanup function (if you provided it)
  with the old values, and then run your setup function with the new values.
  After your component is removed from the DOM, React will run your cleanup
  function.
  * optional dependencies: The list of all reactive values referenced inside of the
  setup code.

Returns
  * useEffect returns undefined.
*/

//form changes

const Example1 = () => {
  const [user, setUser] = useState<User>({ firstName: "", lastName: "" } as User);

  function handleChange1(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, firstName: e.target.value });
  }
  function handleChange2(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, lastName: e.target.value });
  }

  //call on every render
  useEffect(() => {
    console.log("init without dependencies!");
  });

  //call only one time in initialization
  useEffect(() => {
    console.log("init with dependencies!");
  }, []);

  useEffect(() => {
    console.log("user changed!");
  }, [user]);

  useEffect(() => {
    console.log("firstName changed!");
  }, [user.firstName]);

  useEffect(() => {
    console.log("lastName changed!");
  }, [user.lastName]);

  useEffect(() => {
    console.log("firstName or changed!");
  }, [user.firstName, user.lastName]);

  return (
    <p>
      <span>1 form changes:</span>
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

//browser events

const Example2 = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }: { x: number; y: number }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <p>
      <span>2 browser events:</span>
      &nbsp;
      {JSON.stringify(coords)}
    </p>
  );
};

//control widget

const Example3 = () => {
  const [zoom, setZoom] = useState(0);
  const widgetRef = useRef<Date>(null!);

  useEffect(() => {
    if (widgetRef.current === null) {
      console.log("init widget");
      widgetRef.current = new Date();
    }

    console.log("chance widget");
  }, [zoom]);

  return (
    <p>
      <span>3 control widget: {zoom}</span>
      &nbsp;
      <button className="btn btn-primary" onClick={() => setZoom(zoom + 1)}>
        +
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => setZoom(zoom - 1)}>
        -
      </button>
    </p>
  );
};

//fetch data

const Example4 = () => {
  const [person, setPerson] = useState("Person 1");
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    setBio(null);

    setTimeout(() => {
      if (!ignore) {
        setBio("This is " + person + " bio.");
      }
    }, 1000);

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <p>
      <span>4 fetch data:</span>
      &nbsp;
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}>
        <option value="Person 1">Person 1</option>
        <option value="Person 2">Person 2</option>
        <option value="Person 3">Person 3</option>
      </select>
      &nbsp;
      <span>
        <i>{bio ?? "Loading..."}</i>
      </span>
    </p>
  );
};

//default

export const UseEffect = () => {
  return (
    <>
      <h2>Hooks / useEffect</h2>
      <hr />
      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>
      <Example4></Example4>
    </>
  );
};
