import { Link } from "react-router-dom";
import "./RoleListCard.css";

export default function RoleListCard({ role }) {
  return (
    <div className="card-container">
      <Link to={`/roles/${role.jobTitle}`} state={{ data: { role } }}>
        <h2>{role.jobTitle}</h2>
        <p>{role.company}</p>
        <p>${role.salary}</p>
      </Link>
    </div>
  );
}
