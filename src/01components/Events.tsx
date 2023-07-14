//

export const Events1 = () => {
  return (
    <>
      <button onClick={() => console.log("events 1")}>events 1</button>
      <br />
    </>
  );
};

//

export const Events2 = () => {
  const handleEvent = () => {
    console.log("events 2");
  };

  return (
    <>
      <button onClick={handleEvent}>events 2</button>
      <br />
    </>
  );
};

//

export const Events3 = () => {
  return (
    <>
      <button
        onClick={(event) => {
          console.log("events 3");
          console.log(event);
        }}>
        events 2
      </button>
      <br />
    </>
  );
};

//

export const Events4 = () => {
  const handleEvent = (event: React.SyntheticEvent) => {
    console.log("events 4");
    console.log(event);
  };

  return (
    <>
      <button onClick={handleEvent}>events 4</button>
      <br />
    </>
  );
};
