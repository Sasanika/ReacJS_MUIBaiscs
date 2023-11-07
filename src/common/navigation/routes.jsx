import Dashboard from "../../pages/dashboard/Dashboard.jsx";
import Home from "../../pages/home/Home.jsx";
import Item from "../../pages/Item/item.jsx";
import Student from "../../pages/student/student.jsx";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Axios from "../../pages/axios/Axios.jsx";

const routes = [
    {
        name:"Dashboard",
        key:"dashboard",
        component:<Dashboard/>,
        path:"/dashboard",
        icon:<InboxIcon/>
    },
    {
        name:"Home",
        key:"home",
        component: <Home/>,
        path:"/home",
        icon:<InboxIcon/>
    },
    {
        name:"Item",
        key: "item",
        component: <Item/>,
        path:"/item",
        icon:<MailIcon/>
    },
    {
        name:"Student",
        key: "student",
        component: <Student/>,
        path:"/student",
        icon:<MailIcon/>
    },
    {
        name:"Axios",
        key: "axios",
        component: <Axios/>,
        path:"/axios",
        icon:<MailIcon/>
    }
];

export default routes;
