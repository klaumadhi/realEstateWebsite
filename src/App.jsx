
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listpage/listPage";
import Layout from "./components/layout/layout";
import HomePage from "./routes/homePage/homePage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePages/profilePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout/>
      ),children:[
        {path:'/',
        element: <HomePage/>},
        {path:'/list',
          element: <ListPage/>
        },
        {path:'/:id',
          element: <SinglePage/>
        },
        {path:'/profile',
          element: <ProfilePage/>
        },
      ]
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
  ]);


  return (
 
    <RouterProvider router={router}/>
  )
}

export default App