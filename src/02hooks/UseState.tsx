import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
}

export const UseState1 = () => {
  //inferred type
  const [state1, setState1] = useState("inferred type");
  //explicit type
  const [state2, setState2] = useState<string>("explicit type");
  //object null
  const [state3, setState3] = useState<User | null>(null);
  //object null
  const [state4, setState4] = useState<User>({} as User);

  return (
    <>
      <p>{state1}</p>
      <p>{state2}</p>
      <p>null : {JSON.stringify(state3)}</p>
      <p>empty : {JSON.stringify(state4)}</p>
    </>
  );
};

export const UseState = () => {
  return (
    <>
      <h2>Hooks / useState</h2>
      <hr />
      <UseState1></UseState1>
    </>
  );
};
