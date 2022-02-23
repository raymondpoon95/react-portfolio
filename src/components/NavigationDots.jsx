import React, { useState } from "react";

const NavigationDots = ({ active }) => {
  const [setToggle] = useState(false);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          onClick={() => setToggle(false)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
