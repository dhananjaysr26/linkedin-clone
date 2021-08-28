import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import coverPic from "./img/cover.jpg";
function Sidebar() {
    const recentItem=(topic)=>{
        render(
            <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <h1>Hello</h1>
            <p>{topic}</p>
       </div>
        )
    };
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={coverPic} alt="" />
                <Avatar className="sidebar__avatar" src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A.jpg"/>
                <h2>Satya Nadela</h2>
                <h4>Satya@outlook.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="sidebar__statNumber">2,435</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post </p>
                    <p className="sidebar__statNumber">20,435</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Programming')}
                {recentItem('Programming')}
                {recentItem('Programming')}
                {recentItem('Programming')}
            </div>
        </div>
    );
}

export default Sidebar;
