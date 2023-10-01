import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Hero from "../components/Hero";
import Books from "../components/Books";
import About from "../components/About";
import BookDetails from "../components/BookDetails";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new?"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);

export default router;
