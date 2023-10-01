import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const loderData = useLoaderData();
  const data = loderData.books;
  console.log(data);

  return (
    <div>
      {data.map((book) => (
        <Book key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Books;
