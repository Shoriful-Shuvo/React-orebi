import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './componants/pages/Home'
import Shop from './componants/pages/Shop'
import RootLayout from './componants/RootLayout';
import Error from './componants/Error';
import About from './componants/pages/About';
import Contacts from './componants/pages/Contacts';
import Journal from './componants/pages/Journal';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route>
      <Route path="/"element={<RootLayout/>} >
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/journal" element={<Journal/>}/>
      <Route path="/:id" element={<Error/>}/>
      </Route>
      </Route>   

      </>
  
    )
  );
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App

