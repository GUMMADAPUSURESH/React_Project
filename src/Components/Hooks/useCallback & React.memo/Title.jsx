import React from "react";

const Title = () => {
  console.log("Title Rendered");
  return (
    <div>
      <h2>useCallback & React.memo Example</h2>
    </div>
  );
};

export default React.memo(Title);
