import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import HomePage from "../pages/homePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
  path: "/",
  element: <MainLayout></MainLayout>,
  children: [
   {
    index: true,
    element: <HomePage></HomePage>
   },
   {
    path: "/books",
    element: <Books></Books>
   },
   {
    path: "/bookDetails/:id",
    element: <BookDetails></BookDetails>,
    loader: () => fetch('/booksData.json')
   }
  ],
  errorElement: <ErrorPage></ErrorPage>

},
])