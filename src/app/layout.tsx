import React from "react";

import Background from "@/generated/backgrounds/pink-splash-wide";

import Style from "./layout.module.css";
import LanguageSelector from "@/components/LanguageSelector";
import { isRouteEqualTo, makeGoto } from "./routes";
import { IconBack, IconMail } from "@/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={Style.splash}>
      <Background type="background" />
      <header>
        {isRouteEqualTo("/") && <IconMail onClick={makeGoto("/contact")} />}
        {!isRouteEqualTo("/") && <IconBack onClick={makeGoto("/")} />}
        <div className={Style.title}>Tolokoban</div>
        <LanguageSelector />
      </header>
      <main>{children}</main>
    </div>
  );
}
