import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
