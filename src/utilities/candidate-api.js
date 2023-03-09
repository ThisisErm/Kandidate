import sendRequest from "./send-request"

const BASE_URL = "/api/candidates"

    //GET candidates
export function getCandidate() {
    return sendRequest(BASE_URL)
}

    //SHOW candidate
export function showCandidate(candidateId){
    return sendRequest(`${BASE_URL}/${candidateId}`)
}

    //POST candidate
export function addCandidate(candidate) {
    return sendRequest(BASE_URL, "POST", candidate)
}

    //PATCH candidate
export function updateCandidate(candidate, candidateId) {
    return sendRequest(`${BASE_URL}/${candidateId}`, "PATCH", candidate)
}

    //DELETE candidate
export function deleteCandidate(candidateId) {
    return sendRequest(`${BASE_URL}/${candidateId}`, "DELETE")
}