import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h2>WordPress API Blog</h2>
      </Link>
    </div>
  );
}
