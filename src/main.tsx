import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import ShowcaseApp from "./showcase/showcase-app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShowcaseApp />
  </StrictMode>,
);
