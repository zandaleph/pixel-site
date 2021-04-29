declare module "gatsby-plugin-gdpr-cookies" {
  import { WindowLocation } from "@reach/router";

  export function initializeAndTrack(location: WindowLocation<unknown>): void;
}
