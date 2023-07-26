export const Binding = () => {
  const text_capitalize: string = "text-capitalize";

  const click = (event?: any) => {
    console.log("click");
    console.log(event);
  };

  return (
    <>
      <h2>Basic / Bindings</h2>
      <hr />
      <h4>property binding</h4>
      <p className="text-capitalize">string binding</p>
      <p className={text_capitalize}>expresion binding</p>
      <hr />
      <h4>class binding</h4>
      <p className="text-capitalize fw-bold">capitalized text.</p>
      <p className={"text-capitalize fw-bold"}>capitalized text.</p>
      <hr />
      <h4>style binding</h4>
      <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>capitalized text.</p>
      <hr />
      <h4>event binding</h4>
      <button onClick={() => click()} className="btn btn-primary">
        click no event
      </button>
      &nbsp;
      <button onClick={click} className="btn btn-primary">
        click event
      </button>
    </>
  );
};
