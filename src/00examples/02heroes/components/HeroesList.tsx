import { Heroe } from "../interfaces/heroesInterface";

export const HeroesList = ({ heroes }: { heroes: Heroe[] }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heroe Name</th>
          <th scope="col">Real Name</th>
        </tr>
      </thead>
      <tbody>
        {heroes.map((heroe, i) => (
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{heroe.heroeName}</td>
            <td>{heroe.realName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
