import React from "react";

import Vignette from "@/components/Vignette";
import { useTranslation } from "../translation";
import { RoutePath } from "@/app/types";
import { ResponsiveImageCoreProps } from "@/components/ResponsiveImage";

import CodeTP from "@/generated/code/TP";
import CodeCircuitStudio from "@/generated/code/CircuitStudio";
import CodeBBOP from "@/generated/code/BBOP";
import CodeProteinAtlas from "@/generated/code/ProteinAtlas";
import CodeOpenDeck from "@/generated/code/OpenDeck";
import CodeHippocampus from "@/generated/code/Hippocampus";
import CodeMinervois from "@/generated/code/Minervois";
import CodeAkonolinga from "@/generated/code/Akonolinga";
import CodeWebgl from "@/generated/code/Webgl";
import CodeFern from "@/generated/code/Fern";
import CodeFrancaisFacile from "@/generated/code/FrancaisFacile";
import CodeMediationFamilliale from "@/generated/code/MediationFamilliale";
import CodeHandsOnWebGL from "@/generated/code/HandsOnWebGL";
import CodeTrailTar from "@/generated/code/TrailTar";
import CodeApiHrGraph from "@/generated/code/ApiHrGraph";
import CodeTournus from "@/generated/code/Tournus";
import GrafixWedding from "@/generated/grafix/Wedding";
import GrafixMarieLouise79 from "@/generated/grafix/MarieLouise79";
import GrafixMotor from "@/generated/grafix/Motor";
import GrafixFredo50 from "@/generated/grafix/Fredo50";
import GrafixDanatia from "@/generated/grafix/Danatia";
import GrafixVoughtTower from "@/generated/grafix/VoughtTower";
import GrafixSnowRobots from "@/generated/grafix/SnowRobots";
import GrafixVega30 from "@/generated/grafix/Vega30BlackHole";

import styles from "./Welcome.module.css";

export interface WelcomeProps {
  className?: string;
}

const TROMBINE = "images/trombine/trombine.webp";

const VIGNETTES: Record<
  "code" | "gfx",
  Partial<
    Record<RoutePath, (props: ResponsiveImageCoreProps) => React.ReactNode>
  >
> = {
  code: {
    "/work/articles/TP": CodeTP,
    "/work/articles/CircuitStudio": CodeCircuitStudio,
    "/work/articles/BBOP": CodeBBOP,
    "/work/articles/ProteinAtlas": CodeProteinAtlas,
    "/work/articles/OpenDeck": CodeOpenDeck,
    "/work/articles/Hippocampus": CodeHippocampus,
    "/work/articles/Minervois": CodeMinervois,
    "/work/articles/Akonolinga": CodeAkonolinga,
    "/work/articles/Webgl": CodeWebgl,
    "/work/articles/Fern": CodeFern,
    "/work/articles/FrancaisFacile": CodeFrancaisFacile,
    "/work/articles/MediationFamilliale": CodeMediationFamilliale,
    "/work/articles/HandsOnWebGL": CodeHandsOnWebGL,
    "/work/articles/TrailTar": CodeTrailTar,
    "/work/articles/ApiHrGraph": CodeApiHrGraph,
    "/work/articles/Tournus": CodeTournus,
  },
  gfx: {
    "/work/articles/Vega30BlackHole": GrafixVega30,
    "/work/articles/Wedding": GrafixWedding,
    "/work/articles/MarieLouise79": GrafixMarieLouise79,
    "/work/articles/Motor": GrafixMotor,
    "/work/articles/Fredo50": GrafixFredo50,
    "/work/articles/Danatia": GrafixDanatia,
    "/work/articles/VoughtTower": GrafixVoughtTower,
    "/work/articles/SnowRobots": GrafixSnowRobots,
  },
};

export default function Welcome({ className }: WelcomeProps) {
  const tr = useTranslation();
  const [section, setSection] = React.useState<keyof typeof VIGNETTES>("code");
  const [trombineOpacity, setTrombineOpacity] = React.useState(0);
  React.useEffect(() => {
    const img = new Image();
    img.src = TROMBINE;
    img.onload = () => setTrombineOpacity(1);
  });
  return (
    <div className={join(className, styles.Welcome)}>
      <img
        className={styles.trombine}
        src={TROMBINE}
        style={{ opacity: trombineOpacity }}
      />
      <section>
        <main>
          <div>{tr.intro}</div>
        </main>
        <div className={styles.switch}>
          <div>
            <button
              className={join(section === "gfx" && styles.switchOn)}
              onClick={() => setSection("gfx")}
            >
              Grafix
            </button>
            <button
              className={join(section === "code" && styles.switchOn)}
              onClick={() => setSection("code")}
            >
              Code
            </button>
          </div>
        </div>
        <div className={styles.vignettes}>
          {Object.keys(VIGNETTES[section]).map((path) => {
            const vignettes = VIGNETTES[section];
            const Image = vignettes[path as RoutePath];
            if (!Image) return null;

            return <Vignette key={path} href={`#${path}`} image={Image} />;
          })}
        </div>
        <article>
          <a href="#/contact">{tr.about}</a>
        </article>
        <footer>
          <div>
            <p>
              Fabien is a great Fullstack Developer who consistently
              demonstrates a strong commitment to their work. They are highly
              reliable and follow instructions meticulously, ensuring that
              project requirements are met with precision. With their extensive
              experience in WebGL, they create immersive and interactive web
              experiences. Their dedication and expertise make them a valuable
              asset to any team, ensuring projects are completed efficiently and
              to the highest standard.
            </p>
            <div>Jean-Denis Courcol (EPFL)</div>
          </div>
          <div>
            <p>
              Monsieur Petitjean a travaillé chez Lombard Odier en tant
              qu’ingénieur en développement informatique dans le domaine des
              applications de trading et m’a rapporté en tant que tel de 2005 à
              2019. Je me plais à reconnaître en Monsieur Petitjean un
              collaborateur autonome, responsable et méthodique, possédant
              d'excellentes connaissances professionnelles. Doté d'un très bon
              esprit d'analyse et de résolution de problèmes basés sur une
              grande créativité et de solides fondations mathématiques, il a su
              prendre en charge des sujets complexes et les résoudre avec
              efficacité, atteignant ainsi les objectifs qui lui étaient fixés.
              Par ailleurs, Monsieur Petitjean s'est montré rigoureux,
              consciencieux et précis dans l'exécution de ses tâches. Nous
              souhaitons également relever ses excellentes compétences
              techniques en matière de développement. Ainsi, nous confirmons
              qu'il nous a donné entière satisfaction. Enfin, grâce à son
              caractère serviable et communicatif, Monsieur Petitjean a
              entretenu d'excellentes relations avec l'ensemble de son
              entourage.
            </p>
            <div>Pierre Planche (Lombard Odier)</div>
          </div>
          <div>
            <p>
              Fabien is an outstanding Software Engineer who always accomplishes
              all his duties to our utmost satisfaction. He is a valuable asset
              who consistently shows excellent performance, dedication, and work
              ethics that immensely contributes to the Blue Brain Project's
              objectives. Since joining BBP, Fabien has led and developed
              several software tools from scratch. An excellent team player,
              Fabien works excellently with others, taking their feedback into
              account, and producing work that incorporates their needs. Thanks
              to his active listening skills, he is the team's ideal interface
              to obtain user feedback from scientists. He is able to translate
              complicated user requests into feasible application features.
              Through the development of several web applications, he has given
              scientists the possibility to visualize their data in a very
              simple way and, additionally, scientists have been able to create
              images and videos of their data extremely intuitively without the
              need of previous technical knowledge. Fabien deals perfectly well
              with constraints. He is able to manage several projects at the
              same time, making sure to always respect deadlines and priorities.
              It is always a pleasure to work with Fabien. He always brings good
              mood to the team, and is willing to help his colleagues, and
              mentor them.
            </p>
            <div>Judit Planas Carbonell (EPFL)</div>
          </div>
        </footer>
      </section>
    </div>
  );
}

function join(...classes: unknown[]): string {
  return classes.filter((cls) => typeof cls === "string").join(" ");
}
