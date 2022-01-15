import * as React from 'react';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import './app.css';




export default function App() {
  return (
    <div><Topbar />
      <div className="container">
        <Sidebar />
        <div className="othersContainer">
          somethings
        </div>
      </div>

    </div>
  );
}
