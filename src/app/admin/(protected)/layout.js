"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../public/admin/sass/globals.scss";
import "../../../../public/admin/sass/pages/adminLayout.scss";
import NavTop from "../components/navTop";
import SideBar from "../components/sideBar";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/navigation";
import { checkLogin } from "@/frontend/helpers";


export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isLogin = async () => {
        if(await checkLogin()) {
            setAuthenticated(true)
        } else {
            redirect("/admin/login")
        }
    }

    useEffect(() => {
        isLogin();
    }, [])

    if(!authenticated) return "";

    return (
        <div className='layout_main'>
            <div className={`overlay ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}></div>
            <div className={`left_main ${isSidebarOpen ? 'open' : 'closed'}`}>
                <SideBar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
            </div>
            <div className='right_main'>
                <div className='bar_icon d-xl-none d-block' onClick={() => toggleSidebar()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {children}
            </div>
        </div>
    );
}