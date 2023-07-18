import { Gif } from "./helpers/gifs-interface";

export const GifResults = ({ results }: { results: Gif[] }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {results.map((result: Gif) => (
          <div key={result.id} className="col">
            <div className="card">
              <img src={result.url} alt={result.title} className="card-img-top mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
