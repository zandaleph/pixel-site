import React, { useState, useEffect } from "react";

import { onFacebookPixel, Fbq, FbqContainer } from "../lib/onFacebookPixel";

export type { Fbq } from "../lib/onFacebookPixel";

const FbqContext = React.createContext<Partial<FbqContainer> | undefined>(
  undefined
);

export const FacebookPixelProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Partial<FbqContainer>>({});
  useEffect(() => {
    onFacebookPixel((ctx: FbqContainer) => {
      setState(ctx);
    });
  }, [setState]);
  return <FbqContext.Provider value={state}>{children}</FbqContext.Provider>;
};

export const useFacebookPixel = (): Fbq | undefined => {
  const container = React.useContext(FbqContext);
  if (container == undefined) {
    throw new Error(
      "useFacebookPixel must be used within a FacebookPixelProvider"
    );
  }
  return container.fbq;
};
