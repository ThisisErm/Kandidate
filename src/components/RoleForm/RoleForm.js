import { useState } from "react";
import * as rolesAPI from "../../utilities/roles-api";
import './RoleForm.css';

export default function RoleForm({ onRoleAdded }) {
  const [role, setRole] = useState({
    jobTitle: "",
    jobDescription: "",
    company: "",
    salary: "",
    candidates: []
  });

  function handleChange(event) {
    setRole({ ...role, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const addedRole = await rolesAPI.addRole(role);
    onRoleAdded(addedRole);
    setRole({ jobTitle: "", jobDescription: "", company: "", salary: "", candidates: [] });
  }

  return (
    <>
      <div className="role-form-container">
        <form onSubmit={handleSubmit} id="add-role-form">
          <label className="add-role-label">Job Title:</label>
          <input
            name="jobTitle"
            type="text"
            className="role-form-input"
            value={role.jobTitle}
            onChange={handleChange}
          />
          <label className="add-role-label">Job Description:</label>
          <textarea
            name="jobDescription"
            className="role-form-input"
            value={role.jobDescription}
            onChange={handleChange}
          ></textarea>
          <label className="add-role-label">Company:</label>
          <input
            name="company"
            type="text"
            className="role-form-input"
            value={role.company}
            onChange={handleChange}
          />
          <label className="add-role-label">Salary:</label>
          <input
            name="salary"
            type="number"
            className="role-form-input"
            value={role.salary}
            onChange={handleChange}
          />
          <label className="add-role-label">Candidates:</label>
          {/* 
          This is where you can add a list of candidates to select from or add new candidates using the CandidateForm component. 
          */}
          <button type="submit" id="add-role-button">
            Add new role
          </button>
        </form>
      </div>
    </>
  );
}
