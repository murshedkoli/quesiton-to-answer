import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>AskMe Anything</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Settings />
                    </div>
                    <img src="" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
