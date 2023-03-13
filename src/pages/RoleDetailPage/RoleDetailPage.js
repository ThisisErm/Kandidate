import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateRoleForm from "../../components/UpdateRoleForm/UpdateRoleForm";
import * as rolesAPI from "../../utilities/roles-api";
import './RoleDetailPage.css';

export default function RoleDetailPage() {
  const role = useLocation();
  const { data } = role.state;
  const [showForm, setShowForm] = useState(false)
  const [roleData, setRoleData] = useState({ candidates: [] });


  useEffect(function () {
    async function show() {
      const roleApiData = await rolesAPI.getRoleById(data.role._id);
      console.log(roleApiData); // add this line to see the response from the API
      setRoleData(roleApiData);
    }
    show();
  }, []);
  

  return (
    <>
      <div className="main-page-container">
        <div>
          <h2>{roleData.jobTitle}</h2>
          <p>Job Description: {roleData.jobDescription}</p>
          <p>Company: {roleData.company}</p>
          <p>Salary: {roleData.salary}</p>
          <h3>Candidates:</h3>
          {roleData.candidates && roleData.candidates.length > 0 ? (
            <ul>
  {roleData.candidates.map((candidate, index) => (
    <li key={candidate._id}>{candidate}</li>
  ))}
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
