import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <Navbar />
          {/* Page content here */}
          <RouterProvider router={router} />
        </div>
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};
export default App;
