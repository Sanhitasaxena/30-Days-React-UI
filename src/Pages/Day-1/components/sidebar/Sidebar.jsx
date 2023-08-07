import React from 'react'
import "../../components/sidebar/sidebar.css"

const Sidebar = () => {
  return (
    <div className="sideBar">
        <div className="sidebr-header">
          <div className="newChat">
            {/* plis icon */}
            New chat
          </div>
          <span className="collapse-btn"></span>
        </div>
        <div className="list-1">
          <h5>Yesturday</h5>
          <ul>
            <li><span></span>Centering Div: 3 Methods </li>
            <li><span></span>Front-End Dev Position Request</li>
          </ul>
        </div>
        <div className="list-2">
        <h5>Previous 7 Days</h5>
          <ul>
            <li><span></span>Animate Text CSS</li>
            <li><span></span>New Chat</li>
            <li><span></span>New Chat</li>
            <li><span></span>New Chat</li>
            <li><span></span>React Responsive Navbar</li>
            <li><span></span>New Chat</li>
          </ul>
        </div>
        <div className="list-3">
        <h5>Previous 30 days</h5>
          <ul>
            <li><span></span>New Chat</li>
            <li><span></span>Frontend Dev Seeks Opportunities.</li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <div className="footer-premium">
            <div>
              {/* icon */}
              <span>Upgrade to premium</span>
            </div>
            <button>NEW</button>
          </div>
          <div className="profile">
             <div>
              <img/>
              <span>Sanhita Saxena</span>
             </div>
             <svg></svg>
          </div>
        </div>
      </div>
  )
}

export default Sidebar