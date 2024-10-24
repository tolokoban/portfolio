import React from "react";
import { createRoot } from "react-dom/client";

import State from "@/state";

import App from "./app";
import FontDosis from "./fonts/dosis";
import { Theme } from "./ui";

import "./index.css";
import { useLangValue } from "./lang";

async function start() {
  FontDosis.load300();
  FontDosis.load700();
  const theme = new Theme({
    colors: {
      neutral: ["#001c29", "#163949", "#027eb8"],
      primary: {
        hue: 224.3071923597455,
        chroma: 28.59706692488692,
        lightness: [10, 60],
      },
      secondary: ["#aed06f"],
    },
  });
  theme.apply();
  const container = document.getElementById("app");
  if (!container) throw Error("Missing element with id #app!");
  createRoot(container).render(<MainPage />);

  const splash = document.getElementById("splash");
  if (splash) {
    splash.classList.add("vanish");
    window.setTimeout(() => splash.parentNode?.removeChild(splash), 1000);
  }
}

function MainPage() {
  const lang = useLangValue();
  return <App lang={lang} />;
}

start();
