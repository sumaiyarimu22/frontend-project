import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>{error.statusText}</h2>
      <h3>{error.status}</h3>
    </div>
  );
};

export default ErrorPage;
