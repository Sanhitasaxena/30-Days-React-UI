import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import "../Day-1/components/chatGPT.css"

const ChatGPT = () => {
  return (
    <div className="main">
      <Sidebar/>
      <Content/>
    </div>
  );
};

export default ChatGPT;
