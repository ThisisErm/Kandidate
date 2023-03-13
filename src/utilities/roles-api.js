import sendRequest from './send-request';

const BASE_URL = '/api/roles';

// GET roles
export function getRoles() {
  return sendRequest(BASE_URL);
}

// GET role by ID
export function getRoleById(roleId) {
  return sendRequest(`${BASE_URL}/${roleId}`);
}

// POST role
export function addRole(role) {
  return sendRequest(BASE_URL, 'POST', role);
}

// PATCH role by ID
export function updateRole(role, roleId) {
  return sendRequest(`${BASE_URL}/${roleId}`, 'PATCH', role);
}

// DELETE role by ID
export function deleteRole(roleId) {
  return sendRequest(`${BASE_URL}/${roleId}`, 'DELETE');
}
