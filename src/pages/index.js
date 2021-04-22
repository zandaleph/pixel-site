import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 640,
};
const paragraphStyles = {
  marginBottom: 48,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Altmeta.org Pixel Test</h1>
      <p style={paragraphStyles}>
        This website uses cookies. You may not opt out.
      </p>
    </main>
  );
};

export default IndexPage;
