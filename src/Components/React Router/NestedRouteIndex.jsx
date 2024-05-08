import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./nestedRouting.css";

const NestedRouteIndex = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Nested Routing</h1>
      <nav className="nested-nav">
        <Link to="/nestedRoutes/1">
          <button className="nav-button">Component 1</button>
        </Link>
        <Link to="/nestedRoutes/2">
          <button className="nav-button">Component 2</button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default NestedRouteIndex;
