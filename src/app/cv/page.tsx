import { useLangValue } from "@/hooks/lang";

export default function PageCV() {
  const lang = useLangValue();
  const tr = TRANSLATIONS[lang] ?? EN;
  const handleEMailAddress = (a: HTMLAnchorElement | null) => {
    if (!a) return;

    a.setAttribute("href", "mailto:" + ["contact", "tolokoban.org"].join("@"));
  };
  return (
    <div>
      <h2>Education</h2>
      <p>
        <b>1997</b>: Master degree in computer Science at{" "}
        <a href="https://www.insa-lyon.fr/">INSA</a>
      </p>
      <p>
        <b>2010</b>: Bachelor in Mathematics at{" "}
        <a href="https://www.univ-fcomte.fr/">Besançon University</a>
      </p>
      <h2>
        Employment <a href="#/cv/employment">(more details)</a>
      </h2>
      <p>
        <b>July 2019 – now</b>: Blue Brain Project (EPFL)
      </p>
      <p>
        <b>June 2006 – June 2019</b>: Lombard Odier Private Bank
      </p>
      <p>
        <b>Mai 2003 – May 2006</b>: SOLOG (Switzerland)
      </p>
      <p>
        <b>July 2002 – April 2003</b>: Reuters
      </p>
      <p>
        <b>July 2001 – June 2002</b>: SOLOG (Switzerland)
      </p>
      <p>
        <b>Sept 2000 – June 2001</b>: SOLOG (France)
      </p>
      <p>
        <b>Dec 1999 – Aug 2000</b>: ATOS Origin
      </p>
      <p>
        <b>July 1996 – Nov 1999</b>: INSERM
      </p>
      <h2>Skills</h2>
      <p>
        <b>Human languages</b>: French (father tongue), Italian (mother tongue),
        English (5 years in an english environment)
      </p>
      <p>
        <b>Computer languages</b>: HTML5, CSS3, Javascript, Typescript, SVG,
        WebGL, MathML, PHP, Python3, Rust, C#, C++, JAVA, LaTeX
      </p>
      <p>
        <b>Tools</b>: React, Webpack, Jest, ESLint, Prettier, Blender, Krita,
        Visual Studio Code, Electron, NodeJS, npm, git, ThreeJS
      </p>
      <h2>Hobbies</h2>
      <p>
        <b>Sport</b>: Trail-running (GR5 2024, Diagonale des fous 2015, UTMB
        2005, …), Basket-Ball, free-falling (72 jumps)
      </p>
      <p>
        <b>Media</b>: 3D modeling, VFX and video editing with Blender, digital
        painting with Krita, short films maker
      </p>
      <p>
        <b>Readings</b>: Metal Hurlant, Martin Gardener, Sam Loyd, Raymon
        Smullyan, Donald Knuth, Russel/Norvig, Liu Xin (three body problem),
        Lovecraft, ...
      </p>
    </div>
  );
}

const FR = {
  email: "Addresse mail",
};

const EN: typeof FR = {
  email: "EMail address",
};

const TRANSLATIONS: Record<string, typeof FR> = {
  fr: FR,
  en: EN,
};
