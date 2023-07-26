import { useState } from "react";

import { HeroesDetail } from "./components/HeroesDetail";
import { HeroesList } from "./components/HeroesList";
import { Heroe } from "./interfaces/heroesInterface";

export const HeroesApp = () => {
  const [heroes, setHeroes] = useState<Heroe[]>([
    {
      heroeName: "Iron Man",
      realName: "Tony Stark",
    },
    {
      heroeName: "Doctor Strange",
      realName: "Stephen Strange",
    },
  ]);

  function handleInsert(heroe: Heroe) {
    setHeroes([...heroes, heroe]);
  }

  return (
    <div className="row justify-content-center text-center">
      <div className="col-6">
        <h2>Examples / Heroes</h2>
        <hr />
        <HeroesList heroes={heroes} />
        <HeroesDetail onInsert={handleInsert} />
      </div>
    </div>
  );
};
