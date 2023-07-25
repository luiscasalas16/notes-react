//parameters

export const Composition1A = ({ message }: { message: string }) => {
  return <span>{message}A</span>;
};

export const Composition1B = ({ message }: { message: string }) => {
  return <span>{message}B</span>;
};

export const Composition1C = () => {
  const message1: string = "component 1";
  const message2: string = "component 1";

  return (
    <>
      <p>
        <strong>parameters</strong>
      </p>
      <p>
        <Composition1A message={message1}></Composition1A>
      </p>
      <p>
        <Composition1B message={message2}></Composition1B>
      </p>
    </>
  );
};

//parameters and events

export const Composition2A = ({ message, event }: { message: string; event: Function }) => {
  return (
    <button className="btn btn-primary" onClick={() => event(message)}>
      {message}A
    </button>
  );
};

export const Composition2B = ({ message, event }: { message: string; event: (message: string) => void }) => {
  return (
    <button className="btn btn-primary" onClick={() => event(message)}>
      {message}B
    </button>
  );
};

export const Composition2C = () => {
  const handleEventA = (message: string) => {
    console.log(message + "A");
  };

  const handleEventB = (message: string) => {
    console.log(message + "B");
  };

  const message1: string = "component 2";
  const message2: string = "component 2";

  return (
    <>
      <p>
        <strong>parameters and events</strong>
      </p>
      <p>
        <span>component2C</span>
      </p>
      <p>
        <Composition2A message={message1} event={handleEventA}></Composition2A>
      </p>
      <p>
        <Composition2B message={message2} event={handleEventB}></Composition2B>
      </p>
    </>
  );
};

//default

export const Composition = () => {
  return (
    <>
      <h2>Basic / Composition</h2>
      <hr />
      <Composition1C></Composition1C>
      <Composition2C></Composition2C>
    </>
  );
};
