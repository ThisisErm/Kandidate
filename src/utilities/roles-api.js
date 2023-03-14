import sendRequest from './send-request';

const BASE_URL = 'http://localhost:3001/api/roles';
const CANDIDATES_BASE_URL = '/api/candidates';

// GET roles
export function getRoles() {
  return sendRequest(BASE_URL);
}

// GET role by ID
export async function getRoleById(roleId) {
  const role = await sendRequest(`${BASE_URL}/${roleId}`);
  const populatedRole = await populateCandidates(role);
  return populatedRole;
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

async function populateCandidates(role) {
  const populatedCandidates = await Promise.all(role.candidates.map(async (candidateId) => {
    const candidate = await getCandidateById(candidateId);
    return candidate;
  }));
  return { ...role, candidates: populatedCandidates };
}

async function getCandidateById(candidateId) {
  return await sendRequest(`${CANDIDATES_BASE_URL}/${candidateId}`);
}
