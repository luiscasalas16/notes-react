import { MouseEventHandler, MouseEvent } from "react";

//inline no event

export const Events1 = () => {
  return (
    <p>
      <button className="btn btn-primary" onClick={() => console.log("events 1")}>
        inline no event
      </button>
    </p>
  );
};

//function no event

export const Events2 = () => {
  const handleEvent = () => {
    console.log("events 2");
  };

  return (
    <p>
      <button className="btn btn-primary" onClick={handleEvent}>
        function no event
      </button>
    </p>
  );
};

//inline event

export const Events3 = () => {
  return (
    <p>
      <button
        className="btn btn-primary"
        onClick={(event) => {
          console.log("events 3");
          console.log(event);
        }}>
        inline event
      </button>
    </p>
  );
};

//function event

export const Events4 = () => {
  const handleEvent = (event: MouseEvent) => {
    console.log("events 4");
    console.log(event);
  };

  return (
    <p>
      <button className="btn btn-primary" onClick={handleEvent}>
        function event
      </button>
    </p>
  );
};

//handler function type and event type

export const Events5 = () => {
  const handleEvent: MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("events 5");
    console.log(event);
  };

  return (
    <p>
      <button className="btn btn-primary" onClick={handleEvent}>
        handler function type and event type
      </button>
    </p>
  );
};

//handler function type

export const Events6 = () => {
  const handleEvent: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("events 6");
    console.log(event);
  };

  return (
    <p>
      <button className="btn btn-primary" onClick={handleEvent}>
        handler function type
      </button>
    </p>
  );
};

//handler event type

export const Events7 = () => {
  const handleEvent = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("events 7");
    console.log(event);
  };

  return (
    <p>
      <button className="btn btn-primary" onClick={handleEvent}>
        handler event type
      </button>
    </p>
  );
};

// //
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
      <Events5 />
      <Events6 />
      <Events7 />
    </>
  );
};
