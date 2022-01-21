import * as React from 'react';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import UserList from './pages/UserList/UserList';
import { Routes, Route } from "react-router-dom";
import PublicHome from './pages/publicHome/PublicHome';
import SingleQuestions from './pages/singleQustions/SingleQuestions';




export default function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/home" element={<PublicHome />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/singlequestions" element={<SingleQuestions />} />
        </Routes>

      </div>

    </div>
  );
}
