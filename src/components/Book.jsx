import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { title, isbn13 } = book;
  return (
    <Link to={`../book/${isbn13}`}>
      <h1>{title}</h1> <br />
    </Link>
  );
};

export default Book;
