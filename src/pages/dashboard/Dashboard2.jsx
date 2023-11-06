import './App.css'
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import Home from "./pages/home/Home.jsx"
import Item from "./pages/Item/item.jsx"
import {Routes,Route, Navigate, Link, useNavigate} from "react-router-dom";

function Dashboard2() {

    const navigate = useNavigate();

    return (
        <>
            {/*<h1>App</h1>*/}
            <div style={{display:"flex", justifyContent:"space-between", width:"70vw"}}>
                <Link to={"/home"}>Home</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/item"}>Item</Link>
            </div>

            <div style={{display:"flex", justifyContent:"space-between", width:"70vw"}}>
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                <button onClick={() => navigate("/item")}>Item</button>
            </div>


            <Routes>
                <Route path={"*"} element={<Navigate to={"/home"} />}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/Item"} element={<Item/>}/>

            </Routes>


            {/* <Home/>
        <Dashboard/>
        <Item/>*/}




        </>
    )
}

export default Dashboard2;
