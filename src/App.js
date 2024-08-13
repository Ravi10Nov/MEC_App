import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from "./component/Body";
import Header from "./component/Header";
import Login from './component/Login';
import Home from './component/Home';
import Register from './component/Register';

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  const appRouter = createBrowserRouter([
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path:'/pages',
      element:<Home />
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/home',
          element: <Home />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;



// export default App;
