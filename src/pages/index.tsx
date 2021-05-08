import React from "react";

import { Layout } from "../components/Layout";
import { useFacebookPixel, Fbq } from "../components/FacebookPixelProvider";

const paragraphStyles: React.CSSProperties = {
  marginBottom: 48,
};

interface TestButtonProps {
  fbq: Fbq;
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
  return (
    <Layout>
      <MainContent />
    </Layout>
  );
};

export default IndexPage;
