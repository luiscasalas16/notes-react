import { GifResults } from "./GifResults";
import { GifSearch } from "./GifSearch";

export const GifMain = () => {
  return (
    <>
      <div className="row justify-content-center text-center">
        <div className="col-8">
          <h2>Examples / Gifs</h2>
          <hr />
          <GifSearch></GifSearch>
        </div>
        <div className="col-12 mt-3">
          <GifResults></GifResults>
        </div>
      </div>
    </>
  );
};
