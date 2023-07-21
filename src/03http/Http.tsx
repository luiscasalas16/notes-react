import { useState } from "react";

export const Http = () => {
  const [results, setResults] = useState("[]");

  const apiUrl: string = "https://reqres.in/api";

  const getUsers = async () => {
    const url = `${apiUrl}/users?page=${1}`;
    const respose = await fetch(url);
    const { data } = await respose.json();
    setResults(JSON.stringify(data, null, 4));
  };

  return (
    <>
      <h2>Http / Basic</h2>
      <hr />

      <button onClick={getUsers} className="btn btn-primary">
        Get Users
      </button>

      <br />
      <br />

      <pre>{results}</pre>
    </>
  );
};
