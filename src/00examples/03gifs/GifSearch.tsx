import { KeyboardEvent, useState } from "react";

export const GifSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const search = (event: KeyboardEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <>
      <div className="row">
        <label htmlFor="search" className="col-form-label col-sm-2">
          Search
        </label>
        <div className="col-sm-10">
          <input id="search" type="text" className="form-control" placeholder="..." onKeyUp={search} />
        </div>
      </div>
    </>
  );
};
