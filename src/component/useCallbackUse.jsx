import React from "react";

const Header = ({ newFn }) => {
  console.log("Header component rendered");
  return (
    <>
      <div>
        <h1>Header Component</h1>
      </div>
    </>
  );
};

export default React.memo(Header);
