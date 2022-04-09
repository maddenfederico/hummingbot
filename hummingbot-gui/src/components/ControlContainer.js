import React from 'react'
import './ControlContainer.css'
import ControlButtons from './ControlButtons'

import helpIcon from '../assets/help-icon.svg'
import settingsIcon from '../assets/settings-icon.svg'

function ControlContainer() {
  return (
    <div className="control-container">
      <ControlButtons />
      <div className="settings-icon">
        <img 
          onClick={}
          src={settingsIcon} 
          alt="settings icon" 
        />
      </div>
      <div className="help-icon">
        <img 
          onClick={}
          src={helpIcon} 
          alt="help icon" 
        />
      </div>
    </div>
    

  )
}

export default ControlContainer