import React from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

import { Header } from "./Header";

const layoutStyle = {
  maxWidth: 650,
};

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Helmet
        title="Altmeta.org Pixel Test"
        meta={[
          {
            name: "description",
            content: "a website for testing facebook pixel",
          },
          { name: "keywords", content: "facebook, pixel" },
          { name: "author", content: "Zack Spellman" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div style={layoutStyle}>
        <Header />
        {children}
        <CookieConsent
          debug={true}
          cookieName="cookie-consent"
          onAccept={() => initializeAndTrack(location)}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </>
  );
};
