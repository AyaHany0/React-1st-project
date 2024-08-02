import "./App.css";
import Home from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { NotFound } from "./Components/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayOut } from "./Components/LayOut/LayOut";

function App() {
  let router = createBrowserRouter([
    {
      path: "/React-1st-project/",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
