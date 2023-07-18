import { useState } from "react";

export const CounterApp = () => {
  const [total, setTotal] = useState(10);

  const tittle: string = "Contador App";
  const base: number = 5;

  const increase = (value: number) => {
    setTotal(total + value);
  };

  const decrease = (value: number) => {
    setTotal(total - value);
  };

  return (
    <>
      <div className="row justify-content-center text-center">
        <div className="col-auto">
          <h2>Examples / Counter</h2>

          <hr />

          <h2>{tittle}</h2>

          <h4>
            Base: <strong> {base} </strong>
          </h4>

          <button type="button" className="btn btn-primary" onClick={() => decrease(base)}>
            - {base}
          </button>

          <span> {total} </span>

          <button type="button" className="btn btn-primary" onClick={() => increase(base)}>
            + {base}
          </button>
        </div>
      </div>
    </>
  );
};
