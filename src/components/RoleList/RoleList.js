import { useState, useEffect } from "react";
import RoleListCard from "./RoleListCard";
import RoleForm from "../RoleForm/RoleForm";
import * as rolesAPI from "../../utilities/roles-api";
import './RoleList.css'

export default function RoleList() {
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false); // add a state variable to track whether to show the form

  useEffect(function () {
    async function getRoles() {
      const roles = await rolesAPI.getRoles();
      setRoles(roles);
    }
    getRoles();
  }, []);


  async function handleRoleAdded(addedRole) {
    setRoles([...roles, addedRole]);
    console.log(roles)
  }

  return (
    <>
    <div className="role-list-container">
      <div>
        <h2>My Roles</h2>
        <button id ="add-role-button" onClick={() => setShowForm(true)}>Add Role</button>
        {showForm && <RoleForm onRoleAdded={handleRoleAdded} />}
      </div>
      <div>
        {roles.map((role, index) => (
        <RoleListCard role={role} index={index} key={index} />
        ))}
      </div>    
    </div>
    </>
  );
}
