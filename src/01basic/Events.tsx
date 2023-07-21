//inline no event

export const Events1 = () => {
  return (
    <>
      <button className="btn btn-primary" onClick={() => console.log("events 1")}>
        events 1
      </button>
      <br />
    </>
  );
};

//function no event

export const Events2 = () => {
  const handleEvent = () => {
    console.log("events 2");
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleEvent}>
        events 2
      </button>
      <br />
    </>
  );
};

//inline event

export const Events3 = () => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={(event: React.SyntheticEvent) => {
          console.log("events 3");
          console.log(event);
        }}>
        events 2
      </button>
      <br />
    </>
  );
};

//function event

export const Events4 = () => {
  const handleEvent = (event: React.SyntheticEvent) => {
    console.log("events 4");
    console.log(event);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleEvent}>
        events 4
      </button>
      <br />
    </>
  );
};

// //function type and event type
// const onChange0: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log(e.target.value);
// };

// //function type
// const onChange1: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//   console.log(e.target.value);
// };

// //event type
// const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log(e.target.value);
// };

//default
export const Events = () => {
  return (
    <>
      <h2>Basic / Events</h2>
      <hr />
      <Events1 />
      <Events2 />
      <Events3 />
      <Events4 />
    </>
  );
};
