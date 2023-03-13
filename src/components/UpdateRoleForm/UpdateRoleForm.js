import { useState, useEffect } from "react";
import * as rolesAPI from "../../utilities/roles-api";
import * as candidatesAPI from "../../utilities/candidate-api";

import { Link } from "react-router-dom";
import "./UpdateRoleForm.css";

export default function UpdateRoleForm({ data }) {
  // assign value of role _id
  const roleId = `${data.role._id}`;

  const [role, setRole] = useState({
    jobTitle: `${data.role.jobTitle}`,
    jobDescription: `${data.role.jobDescription}`,
    company: `${data.role.company}`,
    salary: `${data.role.salary}`,
    candidates: data.role.candidates.map(candidate => `${candidate._id}`),
  });

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchCandidate() {
      const fetchedCandidates = await candidatesAPI.getCandidate();
      setCandidates(fetchedCandidates);
    }
    fetchCandidate();
  }, []);

  function handleChange(event) {
    const { name, options } = event.target;
    const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value);
    setRole({ ...role, [name]: selectedValues });
  }

  function handleSubmit(event) {
    event.preventDefault();
    rolesAPI.updateRole(role, roleId);
  }

  function handleDelete() {
    rolesAPI.deleteRole(roleId);
  }

  return (
    <div className="update-role-form-container">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="jobTitle"
          type="text"
          value={role.jobTitle}
          onChange={handleChange}
        />
        <label>Description:</label>
        <textarea
          name="jobDescription"
          value={role.jobDescription}
          onChange={handleChange}
        />
        <label>Company:</label>
        <input
          name="company"
          type="text"
          value={role.company}
          onChange={handleChange}
        />
        <label>Salary:</label>
        <input
          name="salary"
          type="text"
          value={role.salary}
          onChange={handleChange}
        />
        <label>Candidates:</label>
        <select
          name="candidates"
          multiple
          value={role.candidates}
          onChange={handleChange}
        >
          {candidates.map((candidate) => (
            <option key={candidate._id} value={candidate._id}>
              {candidate.fullName}
            </option>
          ))}
        </select>
        <Link to="/roles" onClick={handleSubmit}>
          <button type="button" id="update-role-button">
            Update Role
          </button>
        </Link>
      </form>
      <Link to="/roles">
        <button className="delete" onClick={handleDelete}>
          Delete Role
        </button>
      </Link>
    </div>
  );
}
