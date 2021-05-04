import React from "react";

import { Layout } from "../components/Layout";
import {
  FacebookPixelProvider,
  useFacebookPixel,
  FbqMethod,
} from "../components/pixel-context";

const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const paragraphStyles: React.CSSProperties = {
  marginBottom: 48,
};

interface TestButtonProps {
  fbq: FbqMethod;
}

const TestButtons: React.FC<TestButtonProps> = ({ fbq }) => {
  return (
    <>
      <h2 style={paragraphStyles}>Test events</h2>
      <button name="SubscribeButtonClick">Subscribe</button>
      <button
        name="Purchase"
        onClick={() => {
          fbq("track", "Purchase", {
            order_id: "test_order_id",
            value: 115.0,
            currency: "USD",
          });
        }}
      >
        Purchase
      </button>
    </>
  );
};

const Fallback: React.FC = () => {
  return (
    <h2 style={paragraphStyles}>
      You must allow tracking to test facebook pixel.
    </h2>
  );
};

const MainContent: React.FC = () => {
  const fbq = useFacebookPixel();
  console.log("Rendering MainContent, ", fbq !== undefined);
  return fbq !== undefined ? <TestButtons fbq={fbq} /> : <Fallback />;
};

const IndexPage: React.FC = () => {
  console.log("Rendering IndexPage");
  return (
    <Layout>
      <FacebookPixelProvider>
        <main style={pageStyles}>
          <MainContent />
        </main>
      </FacebookPixelProvider>
    </Layout>
  );
};

export default IndexPage;
