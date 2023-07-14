//no parameters, inferred return type

export const Components1 = () => {
  return <p>components 1</p>;
};

//no parameters, explicit return type

export const Components2 = (): JSX.Element => {
  return <p>components 2</p>;
};

//parameters inline

export const Components3 = ({ message }: { message: string }) => {
  return <p>{message} 3</p>;
};

//parameters optional and default

export const Components4 = ({ message, optional = "" }: { message: string; optional?: string }) => {
  return <p>{message + optional} 4</p>;
};

//parameters in interface

interface Components5Props {
  message: string;
}

export const Components5 = ({ message }: Components5Props) => {
  return <p>{message} 5</p>;
};

//parameters in type

type Components6Props = {
  message: string;
};

export const Components6 = ({ message }: Components6Props) => {
  return <p>{message} 6</p>;
};
