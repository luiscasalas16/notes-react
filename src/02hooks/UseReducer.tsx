import { UseReducer1 } from "./UseReducer1";
import { UseReducer2 } from "./UseReducer2";

/*
useReducer is a React Hook that lets you add a reducer to your component.

const [state, dispatch] = useReducer(reducer, initialArg, init?)

Parameters
  * reducer: The reducer function that specifies how the state gets updated. It
  must be pure, should take the state and action as arguments, and should return
  the next state. State and action can be of any types.
  * initialArg: The value from which the initial state is calculated. It can be a
  value of any type. How the initial state is calculated from it depends on the
  next init argument.
  * optional init: The initializer function that should return the initial state.
  If it’s not specified, the initial state is set to initialArg. Otherwise, the
  initial state is set to the result of calling init(initialArg).

Returns
  * The current state. During the first render, it’s set to init(initialArg) or
  initialArg (if there’s no init).
  * The dispatch function that lets you update the state to a different value and
  trigger a re-render.
*/

//default

export const UseReducer = () => {
  return (
    <>
      <h2>Hooks / useReducer</h2>
      <hr />
      <UseReducer1></UseReducer1>
      <UseReducer2></UseReducer2>
    </>
  );
};
