import { ReactElement } from "react";

//no parameters, inferred return type

export const Component1 = () => {
  return <p>1 - no parameters, inferred return type</p>;
};

//no parameters, explicit return type

export const Component2 = (): ReactElement => {
  return <p>2 - no parameters, explicit return type</p>;
};

//parameters inline with optional and default

export const Component3 = ({ message, optional = "3" }: { message: string; optional?: string }) => {
  return <p>{optional + " - " + message}</p>;
};

//interface structured parameters with optional and default

interface Component4Props {
  message: string;
  optional?: string;
}

export const Component4 = (props: Component4Props) => {
  return <p>{props.optional ?? "4" + " - " + props.message}</p>;
};

//type structured parameters with optional and default

type Component5Props = {
  message: string;
  optional?: string;
};

export const Component5 = (props: Component5Props) => {
  return <p>{props.optional ?? "5" + " - " + props.message}</p>;
};

//interface destructured parameters with optional and default

interface Component6Props {
  message: string;
  optional?: string;
}

export const Component6 = ({ message, optional = "4" }: Component6Props) => {
  return <p>{optional + " - " + message}</p>;
};

//type destructured parameters with optional and default

type Component7Props = {
  message: string;
  optional?: string;
};

export const Component7 = ({ message, optional = "5" }: Component7Props) => {
  return <p>{optional + " - " + message}</p>;
};

//default

export const Components = () => {
  return (
    <>
      <h2>Basic / Components</h2>
      <hr />
      <Component1></Component1>
      <Component2></Component2>
      <Component3 message="parameters inline with optional and default"></Component3>
      <Component4 message="interface structured parameters with optional and default"></Component4>
      <Component5 message="type structured parameters with optional and default"></Component5>
      <Component6 message="interface destructured parameters with optional and default"></Component6>
      <Component7 message="type destructured parameters with optional and default"></Component7>
    </>
  );
};
