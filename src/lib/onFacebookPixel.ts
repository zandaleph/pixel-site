export interface Fbq {
  (event: string, desc: string, data: Record<string, unknown>): void;
}

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export interface FbqContainer {
  fbq: Fbq;
}

export function onFacebookPixel(callback: (c: FbqContainer) => void): void {
  if (window.fbq !== undefined) {
    callback({ fbq: window.fbq });
  } else {
    Object.defineProperty(window, "fbq", {
      configurable: true,
      set: function (fbq: Fbq) {
        delete window.fbq;
        window.fbq = fbq;
        callback({ fbq });
      },
    });
  }
}
