import React, { useState, useEffect } from "react";

export type FbqMethod = (
  event: string,
  desc: string,
  data: Record<string, unknown>
) => void;
export type Fbq = { fbq: FbqMethod };

declare global {
  interface Window {
    fbq?: FbqMethod;
  }
}

function onFacebookPixel(callback: (fbq: Fbq) => void): void {
  if (window.fbq !== undefined) {
    console.log("calling callback synchronously", window.fbq !== undefined);
    callback({ fbq: window.fbq });
  } else {
    Object.defineProperty(window, "fbq", {
      configurable: true,
      set: function (fbq: FbqMethod) {
        delete window.fbq;
        window.fbq = fbq;
        console.log("calling callback Asynchronously");
        callback({ fbq });
      },
    });
  }
}

const FbqContext = React.createContext<FbqMethod | undefined>(undefined);

export const FacebookPixelProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Fbq | undefined>();
  console.log("Rendering provider, ", state);
  useEffect(() => {
    onFacebookPixel((result: Fbq) => {
      console.log("Callback called with ", result !== undefined);
      setState(result);
    });
  }, [setState]);
  return (
    <FbqContext.Provider value={state?.fbq}>{children}</FbqContext.Provider>
  );
};

export const useFacebookPixel = (): FbqMethod | undefined => {
  return React.useContext(FbqContext);
};
