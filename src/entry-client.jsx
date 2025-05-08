import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <App />
  </StrictMode>,
  {
    onCaughtError(err) {
      console.error("A caught error while rendering the app.", err);
    },
    onUncaughtError(err) {
      console.error("An uncaught error while rendering the app.", err);
    },
    onRecoverableError(err) {
      console.error(
        "An error happened while rendering the app, but was recovered.",
        err
      );
    },
  }
);
