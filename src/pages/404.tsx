import React from "react";
import { Link } from "gatsby";

const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 640,
};
const paragraphStyles: React.CSSProperties = {
  marginBottom: 48,
};

const NotFoundPage: React.FC = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
