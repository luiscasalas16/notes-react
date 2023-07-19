import { useState } from "react";

import { GifResults } from "./components/GifResults";
import { GifSearch } from "./components/GifSearch";

import { Gif } from "./interfaces/gifsInterface";
import { searchGifs } from "./services/gifsService";

export const GifApp = () => {
  const [results, setResults] = useState<Gif[]>([]);

  const onSearch = async (query: string) => {
    var gifs = await searchGifs(query);

    setResults(gifs);
  };

  return (
    <>
      <div className="row justify-content-center text-center">
        <div className="col-8">
          <h2>Examples / Gifs</h2>
          <hr />
          <GifSearch onSearch={onSearch}></GifSearch>
        </div>
        <div className="col-12 mt-3">
          <GifResults results={results}></GifResults>
        </div>
      </div>
    </>
  );
};
