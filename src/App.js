import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import Shop from './pages/Shop';
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        exact: true,
        element: <Home></Home>
      },
      {
        path: "/shop",
        exact: true,
        element: <Shop></Shop>
      },
      {
        path: "/cart",
        exact: true,
        element: <Cart></Cart>
      },
      {
        path: "/payment",
        exact: true,
        element: <Payment></Payment>
      }
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
