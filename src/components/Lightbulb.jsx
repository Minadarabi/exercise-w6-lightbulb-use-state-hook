import { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [toggled, setToggled] = useState("off");

  const toggleLight = () => {
    // Toggle the on/off state
    setToggled(toggled==="on" ? "off" : "on")
  };

  return (
    <div className="lightbulb-container">
      <div className={`lightbulb ${toggled}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
