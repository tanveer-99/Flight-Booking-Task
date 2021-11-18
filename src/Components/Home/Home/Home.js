import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const [menuText, setMenuText] = useState("menu-text");

    const [sidebarStyle, setSidebarStyle] = useState("col-md-2 sidebar-full");

    const [sidebarMobileStyle, setSidebarMobileStyle] = useState("");


    const barsClicked = ()=> {

        /////////

        if(menuText === "menu-text") {
                setMenuText("menu-text-hide");
                setSidebarStyle("sidebar-short");
        }
        else {
                setMenuText("menu-text");
                setSidebarStyle("col-md-2  sidebar-full");
        }

        //////////

        if(sidebarMobileStyle === "sidebar-hide") {
            setSidebarMobileStyle("");
            setSidebarStyle("col-md-2 sidebar-full");
        }
        else {
            setSidebarMobileStyle("sidebar-hide");
            setSidebarStyle("col-auto ");
        }

    }
    
   
   
    return (
        <div className="home container-fluid">

            <div className="row">

                <div className={sidebarStyle}>

                    <i onClick={barsClicked} className="bars"><FontAwesomeIcon icon={faBars} /></i>

                    <div className={sidebarMobileStyle}>
                        <Sidebar menuText={menuText}></Sidebar>
                    </div>

                </div>

               

                <div className="col-md-10 col-sm pe-4 ps-4">
                    <Header></Header>
                </div>
                
            </div>
        </div>
    );
};

export default Home;