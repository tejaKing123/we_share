import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FunctionsIcon from '@material-ui/icons/Functions';
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon*/}
            <FunctionsIcon  className="sideBarTwitterIcon"/>
            
            {/* side bar*/}
            {/* <SidebarOption active Icon={HomeIcon} text="Home"/> */}
            <Link to="/" style={{ textDecoration: 'none' }}><SidebarOption active Icon={HomeIcon} text="Home"/></Link>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            {/* <SidebarOption Icon={MailOutlineIcon} text="Messages"/> */}
            <Link style={{ textDecoration: 'none' }} to="/chat">
                <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            </Link>            
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}
            <SidebarOption Icon={PermIdentityIcon} text="Profile" ></SidebarOption>
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            {/* never ever don't put empty props */}

            {/* Butten->Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Post_It
            </Button>
            
        </div>
    )
}

export default Sidebar
