import ProjectsData from "../Data/projects.json";
import DisplayCard from "./DisplayCard";

export default function Projects() {
  return (
    <DisplayCard data={ProjectsData}/>
  );
}
