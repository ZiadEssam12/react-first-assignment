import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="section">
      <h2 className="fs-1 title-dark">404</h2>
      <h2 className="fs-1 title-dark">
        <i class="fa-solid fa-link-slash"></i> Not Found
      </h2>
      <Link to={"/home"} className="mt-4">
        <button className="btn btn-outline-success">Back To home</button>
      </Link>
    </div>
  );
}
