import CompetitionsData from "../Data/competitions.json";
import DisplayCard from "./DisplayCard";

export default function Competitions() {
  return (
    <DisplayCard data={CompetitionsData}/>
  );
}
