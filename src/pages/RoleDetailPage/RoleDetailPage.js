import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateRoleForm from "../../components/UpdateRoleForm/UpdateRoleForm";
import * as rolesAPI from "../../utilities/roles-api";
import { Link } from 'react-router-dom';
import './RoleDetailPage.css';

export default function RoleDetailPage() {
  const role = useLocation();
  const { data } = role.state;
  const [showForm, setShowForm] = useState(false)
  const [roleData, setRoleData] = useState({ candidates: [] });

  useEffect(function () {
    async function show() {
      const roleApiData = await rolesAPI.getRoleById(data.role._id);
      setRoleData(roleApiData);
    }
    show();
  }, []);

  return (
    <>
      <div className="main-page-container">
        <div>
          <h2>{roleData.jobTitle}</h2>
          <p>Company: {roleData.company}</p>
          <p>Job Description: {roleData.jobDescription}</p>
          <p>Salary: ${roleData.salary}</p>
          <h3>Candidates:</h3>
          {roleData.candidates && roleData.candidates.length > 0 ? (
  <ul>
    {roleData.candidates.map((candidate) => {
      // console.log({candidate});
      return (
        <Link to={`/${candidate.fullName}`} state={{ data: { candidate } }}>
        <li>{candidate.fullName}</li>
      </Link>
      );
    })}
  </ul>
) : (
  <p>No candidates yet.</p>
)}

          <button id="update-role-button-2" onClick={() => setShowForm(!showForm)}>Edit Role</button>
          {showForm ? (<UpdateRoleForm data={data} />) : " "}
        </div>
      </div>
    </>
  );
}
