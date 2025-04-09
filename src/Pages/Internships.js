import IntershipsData from "../Data/internships.json";
import DisplayCard from "./DisplayCard";

export default function Interships() {
  return (
    <DisplayCard data={IntershipsData}/>
  );
}
