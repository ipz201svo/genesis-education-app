import { createBrowserRouter } from "react-router-dom";
import CoursesListPage from "./coursesList";
import Layout from "../layout";
import CoursePage from "./course";
import { ErrorPage, NotFoundPage } from "./system";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CoursesListPage />,
      },
      {
        path: "/course",
        children: [
          {
            path: "/course/:courseId",
            element: <CoursePage />,
          },
          {
            path: "/course/:courseId/lesson/:lessonId?",
            element: <CoursePage />,
          }
        ],
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);
