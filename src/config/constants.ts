export const BASE_URL = import.meta.env.VITE_BASE_URL || "";

//feature flag
export const LOGIN_FLAG: boolean =
  import.meta.env.VITE_LOGIN_FLAG?.toLowerCase() === "false";
