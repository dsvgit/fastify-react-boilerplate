declare global {
  interface Window {
    __REACT_APP_CONFIG__: Partial<AppEnv>;
  }
}

type AppEnv = {
  NODE_ENV: "development" | "test" | "production";
  REACT_APP_API_ENDPOINT: string;
};

export const env: AppEnv = {
  NODE_ENV: process.env.NODE_ENV as AppEnv["NODE_ENV"],
  REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || "",
  ...window.__REACT_APP_CONFIG__,
};
