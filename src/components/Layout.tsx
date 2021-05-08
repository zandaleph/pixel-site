import React from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

import { Header } from "./Header";
import { FacebookPixelProvider } from "./FacebookPixelProvider";

const CONSENT_COOKIE_NAME = "cookie-consent";

const layoutStyle: React.CSSProperties = {
  maxWidth: 650,
};

const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export const Layout: React.FC = ({ children }) => {
  const location = useLocation(); // eslint-disable-line @typescript-eslint/no-unsafe-assignment

  return (
    <FacebookPixelProvider>
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
        <main style={pageStyles}>{children}</main>
        <CookieConsent
          cookieName={CONSENT_COOKIE_NAME}
          onAccept={() => initializeAndTrack(location)}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </FacebookPixelProvider>
  );
};
