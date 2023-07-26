import { useState, FormEvent } from "react";
import { Heroe } from "../interfaces/heroesInterface";

export const HeroesDetail = ({ onInsert }: { onInsert: (heroe: Heroe) => void }) => {
  const [heroeName, setHeroeName] = useState<string>("");
  const [realName, setRealName] = useState<string>("");

  function insert(event: FormEvent) {
    event.preventDefault();

    if (heroeName.trim().length === 0 || realName.trim().length === 0) return;

    onInsert({ heroeName, realName });

    setHeroeName("");
    setRealName("");
  }

  return (
    <form onSubmit={insert}>
      <div className="mb-3">
        <input type="text" name="nombre" value={heroeName} onChange={(e) => setHeroeName(e.target.value)} placeholder="Heroe Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input type="text" name="poder" value={realName} onChange={(e) => setRealName(e.target.value)} placeholder="Real Name" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
