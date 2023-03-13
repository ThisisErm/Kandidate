import { Link } from "react-router-dom";
import "./CandidateListCard.css";

export default function CandidateListCard({ candidate }) {
 
  return (
    <div className="card-container">
      <Link to={`/${candidate.fullName}`} state={{ data: { candidate } }}>
        <h2>{candidate.fullName}</h2>
      </Link>
    </div>
  );
}
