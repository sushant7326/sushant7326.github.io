import { useState } from "react";
import Projects from "../Pages/Projects";
import Internships from "../Pages/Internships";
import Competitions from "../Pages/Competitions";
import "./Work.css";

export default function Work() {
  document.title = "Work Showcase";
  const [type, setType] = useState("Internships");

  return (
    <section className="work-page">
      <section className="work-page-buttons">
        <div
          onClick={() => setType("Projects")}
          className={"work-type-button" + (type === "Projects" ? " active" : "")}
        >
          <span className="top-left-corner"></span>
          <span className="top-right-corner"></span>
          <span className="bottom-right-corner"></span>
          <span className="bottom-left-corner"></span>
          PROJECTS
        </div>
        <div
          onClick={() => setType("Internships")}
          className={"work-type-button" + (type === "Internships" ? " active" : "")}
        >
          <span className="top-left-corner"></span>
          <span className="top-right-corner"></span>
          <span className="bottom-right-corner"></span>
          <span className="bottom-left-corner"></span>
          INTERNSHIPS
        </div>
        <div
          onClick={() => setType("Competitions")}
          className={"work-type-button" + (type === "Competitions" ? " active" : "")}
        >
          <span className="top-left-corner"></span>
          <span className="top-right-corner"></span>
          <span className="bottom-right-corner"></span>
          <span className="bottom-left-corner"></span>
          COMPETITIONS
        </div>
      </section>
      {type === "Projects" ? <Projects /> : type === "Internships" ? <Internships /> : type === "Competitions" ? <Competitions /> : null}
    </section>
  );
}