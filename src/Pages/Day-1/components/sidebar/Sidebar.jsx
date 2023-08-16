import React from "react";
import "../../components/sidebar/sidebar.css";
import { BsPlusLg } from "react-icons/bs";
import ListIcon from "./ListIcon";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="content">
        <div className="sidebr-header d-flex align-items-center gap-2">
          <div className="newChat d-flex align-items-center gap-3">
            <BsPlusLg />
            New chat
          </div>
          <span className="collapse-btn">
            <svg
              className="collapse-svg"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </span>
        </div>
        <div className="list-1">
          <b>Yesturday</b>
          <ul>
            <li>
              <ListIcon/>
              Centering Div: 3 Methods{" "}
            </li>
            <li>
              <ListIcon/>
              Front-End Dev Position
            </li>
          </ul>
        </div>
        <div className="list-2">
          <b>Previous 7 Days</b>
          <ul>
            <li>
              <ListIcon/>
             Animate Text CSS
            </li>
            <li>
              <ListIcon/>
              New Chat
            </li>
            <li>
              <ListIcon/>
              New Chat
            </li>
            <li>
              <ListIcon/>
              New Chat
            </li>
            <li>
              <ListIcon/>
              React Responsive Navbar
            </li>
            <li>
              <ListIcon/>
              New Chat
            </li>
          </ul>
        </div>
        <div className="list-3">
          <b>Previous 30 days</b>
          <ul>
            <li>
             <ListIcon/>
             New Chat
            </li>
            <li>
              <ListIcon/>
              Frontend Dev Seeks Opportunities.
            </li>
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
              <img />
              <span>Sanhita Saxena</span>
            </div>
            <svg></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
