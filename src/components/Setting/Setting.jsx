import React, { useState } from 'react';
import './Setting.css';
import { useSettings } from '../../context/context';

const Setting = () => {
  const {fontSize, setFontSize, language, setLanguage} = useSettings()
  
  return (
    <div className='main-body'>
    <div className="accessibility-settings">
      <h3>Accessibility Settings</h3>

      <div className="setting-item">
        <label>Choose Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
        </select>
      </div>

      <div className="setting-item">
        <label>Font Size:</label>
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium (Default)</option>
          <option value="large">Large</option>
          <option value="xlarge">Extra Large</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default Setting;
