import { Gif } from "./gifs-interface";

export const searchGifs = async (query: string): Promise<Gif[]> => {
  const apiUrl = "https://api.giphy.com/v1/gifs";
  const apiKey = "CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5";

  const url = `${apiUrl}/search?api_key=${apiKey}&q=${query}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    (img: any) =>
      <Gif>{
        id: img.id,
        url: img.images.downsized_medium.url,
        title: img.title,
      }
  );

  return gifs;
};
