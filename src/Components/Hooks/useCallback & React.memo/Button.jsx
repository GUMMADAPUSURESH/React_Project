import React from "react";

const Button = ({ children, clickHandler }) => {
  console.log(`${children} Rendered`);
  return (
    <div>
      <button className="count-btn" onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
