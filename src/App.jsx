
import './App.css'
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import Home from "./pages/home/Home.jsx"
import Item from "./pages/Item/item.jsx"
import {Routes,Route} from "react-router-dom";

function App() {


  return (
    <div>
        {/*<h1>App</h1>*/}
        <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/Item"} element={<Item/>}/>

        </Routes>


        {/* <Home/>
        <Dashboard/>
        <Item/>*/}




    </div>
  )
}

export default App
