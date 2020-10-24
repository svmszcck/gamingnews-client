import { MOBILE, TABLET, DESKTOP } from "app_constants/responsive";

export const mobile = { query: `(max-width: ${MOBILE})` };

export const mobileTablet = { query: `(max-width: ${TABLET})` };

export const desktop = { query: `(min-width: ${TABLET})` };

export const retina = { query: `(min-width: ${DESKTOP})` };
