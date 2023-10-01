import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const loderdata = useLoaderData();

  return <div>{loderdata.title}</div>;
};

export default BookDetails;
