import React from "react";

import { Layout } from "../components/Layout";

const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const paragraphStyles: React.CSSProperties = {
  marginBottom: 48,
};

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p style={paragraphStyles}>
          This website uses cookies. You may not opt out.
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
