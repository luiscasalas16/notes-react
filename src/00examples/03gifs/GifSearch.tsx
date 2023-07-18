import { KeyboardEvent, ChangeEvent, useState } from "react";

export const GifSearch = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (inputValue.trim().length === 0) return;

    onSearch(inputValue);

    setInputValue("");
  };

  return (
    <>
      <div className="row">
        <label htmlFor="search" className="col-form-label col-sm-2">
          Search
        </label>
        <div className="col-sm-10">
          <input id="search" type="text" className="form-control" placeholder="..." value={inputValue} onChange={onChange} onKeyUp={onKeyUp} />
        </div>
      </div>
    </>
  );
};
