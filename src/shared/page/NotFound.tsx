import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error: any = useRouteError();

  console.error(error);

  return (
    <>
      <p>not-found works!</p>
      <i>{error.statusText || error.message}</i>
    </>
  );
}
