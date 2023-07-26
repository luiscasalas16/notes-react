import { UseContext1 } from "./UseContext1";
import { UseContext2 } from "./UseContext2";

/*
useContext is a React Hook that lets you read and subscribe to context from 
your component. 

const value = useContext(SomeContext) 

Parameters 
  * SomeContext: The context that you’ve previously created with createContext. 
  The context itself does not hold the information, it only represents the kind 
  of information you can provide or read from components. 

Returns 
  * useContext returns the context value for the calling component.
*/

export const UseContext = () => {
  return (
    <>
      <h2>Hooks / useContext</h2>
      <hr />
      <UseContext1 />
      <UseContext2 />
    </>
  );
};
