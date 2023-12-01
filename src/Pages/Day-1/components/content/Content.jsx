import React from 'react'
import "../content/Content.css"
import Select from "react-dropdown-select";
import GptLogo from "../content/GptLogo.png"

const Content = () => {

  return (
    <div className='Content-container'>
       <div className='welcome-div'>
       <img src={GptLogo} height="70px" width="70px"/>
       <h4 className='welcome-test'>How can I help you today?</h4>
       </div>
    </div>
  )
}

export default Content