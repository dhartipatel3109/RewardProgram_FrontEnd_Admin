import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import './layout.scss'

const Layout = () => {
    return(
        <div className="layout">
            <Sidebar />
            <div className="main">
                <Navbar/>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;