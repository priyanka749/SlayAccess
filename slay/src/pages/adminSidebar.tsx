import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import "../css/adminSidebar.css";

interface AdminSidebarProps {
    activePage: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage }) => {
    const handleLogout = () => {
        // Handle logout logic here
    };

    return (
        <>
            <div className={"admin-sidebar"}>
                <div className={"sidebar-brand"}>
                    {/* Brand content */}
                </div>

                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "active" : ""}`}>
                            <Link to={"/AdminDashboard"}>Dashboard</Link>
                        </li>
                        <li className={`sidebar-list-item ${activePage === "/CustomerPage" ? "active" : ""}`}>
                            <Link to={"/CustomerPage"}>Customers</Link>
                        </li>
                        <li className={`sidebar-list-item ${activePage === "/OrderPage" ? "active" : ""}`}>
                            <Link to={"/OrderPage"}>Orders</Link>
                        </li>
                        {/* Add other sidebar items */}
                    </ul>
                </div>

                <div className={"sidebar-btn"}>
                    <Link to={"/"} onClick={handleLogout}>
                        <button type={"button"}>
                            <span><IoMdLogOut style={{ fontSize: "1.3rem", marginBottom: "-3px", marginRight: "3px" }} /></span>Log Out
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AdminSidebar;
