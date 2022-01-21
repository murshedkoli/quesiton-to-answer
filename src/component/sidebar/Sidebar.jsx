import React from 'react'
import './sidebar.css'
import { Message, Dashboard, Feedback, ContactMail, VisibilityOff, Block, Person, Extension, TrendingUp, Settings, ViewCompact } from '@material-ui/icons'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { NavLink } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Deshboard</h3>
                    <ul className="sidebarList">

                        <NavLink to='/dashboard' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem ">
                                <Dashboard className='sidebarIcon' />
                                Home
                            </li>
                        </NavLink>
                        <NavLink to='/permission' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem">
                                <Settings className='sidebarIcon' />
                                Permission
                            </li>
                        </NavLink>
                        <NavLink to='/layout' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem">
                                <ViewCompact className='sidebarIcon' />
                                Layout
                            </li>
                        </NavLink>
                        <NavLink to='/plugins' className='menuLink' activeClassName="active">

                            <li className="sidebarListItem">
                                <Extension className='sidebarIcon' />
                                Plugins
                            </li>
                        </NavLink>
                        <NavLink to='/manage' className='menuLink' activeClassName="active">

                            <li className="sidebarListItem">
                                <ManageAccountsIcon className='sidebarIcon' />
                                Manage
                            </li>
                        </NavLink>
                    </ul>
                </div >


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <NavLink to='/user' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem ">
                                <Person className='sidebarIcon' />
                                Users
                            </li>
                        </NavLink>
                        <NavLink to='/blockedusers' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem" >
                                <Block className='sidebarIcon' />
                                Blocked Users
                            </li>
                        </NavLink>
                        <NavLink to='/blockedwords' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem">
                                <VisibilityOff className='sidebarIcon' />
                                Blocked Words
                            </li>
                        </NavLink>
                        <NavLink to='/blockedquestions' className='menuLink' activeClassName="active">
                            <li className="sidebarListItem">
                                <VisibilityOff className='sidebarIcon' />
                                Blocked Questions
                            </li>
                        </NavLink>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <NavLink to='/mail' className='menuLink' activeClassName="active">

                            <li className="sidebarListItem ">
                                <ContactMail className='sidebarIcon' />
                                Mail
                            </li>
                        </NavLink>
                        <NavLink to='/feedback' className='menuLink' activeClassName="active">

                            <li className="sidebarListItem">
                                <Feedback className='sidebarIcon' />
                                Feedback
                            </li>
                        </NavLink>
                        <NavLink to='/massage' className='menuLink' activeClassName="active">

                            <li className="sidebarListItem">
                                <Message className='sidebarIcon' />
                                Messages
                            </li>
                        </NavLink>
                    </ul>
                </div>

            </div >
        </div >
    )
}
