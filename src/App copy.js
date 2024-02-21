import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React est extrêmement populaire",
    "Il facilite la création d'interfaces utilisateur complexes et interactives",
    "Il est puissant et flexible",
    "Il dispose d'un écosystème très actif et polyvalent",
  ],
  [
    "Composants, JSX et Props",
    "État",
    "Hooks (par exemple, useEffect())",
    "Rendu dynamique",
  ],
  [
    "Page web officielle (react.dev)",
    "Next.js (cadre Fullstack)",
    "React Native (créer des applications mobiles natives avec React)",
  ],
  [
    "Je me présente sous le nom de Koladé M. ABOUDOU",
    "Je suis un développeur web fullstack maitrisant certains langages comme : le JavaScript, le PHP, le python,...",
    "De temps à autres je dessines, j'écris des histoires de mangas et j'investis...",
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>
            {" "}
            Une librairie Js pour construire des interfaces dynamiques et
            réactives
          </p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Pourquoi React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Les Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Informations personnelles
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
