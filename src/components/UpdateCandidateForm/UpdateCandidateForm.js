import { useState } from "react"
import * as candidatesAPI from "../../utilities/candidate-api"
import { Link } from 'react-router-dom';
import './UpdateCandidateForm.css'

export default function UpdateCandidateForm({ data }) {
        //assign value of candidate _id
    const candidateId = `${data.candidate._id}`

    const [candidate, setCandidate] = useState({
        fullName: `${data.candidate.fullName}`,
        phoneNumber: `${data.candidate.phoneNumber}`,
        email: `${data.candidate.email}`,
        LinkedInProfile: `${data.candidate.LinkedInProfile}`,

    })
  
    function handleChange(event) {
        setCandidate({...candidate, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        candidatesAPI.updateCandidate(candidate, candidateId)
    }

    function handleDelete() {
        candidatesAPI.deleteCandidate(candidateId)
    }

    return (
        <div className="update-candidate-form-container">
            <form onSubmit={handleSubmit} id="update-candidate-form">
                <label>Full Name:</label>
                <input  
                    name = "fullName"
                    type = "text"
                    className= "update-candidate-input"
                    value = {candidate.fullName}
                    onChange = {handleChange} />
                <label>Phone:</label>
                <input  
                    name = "phoneNumber"
                    type = "tel"
                    className = "update-candidate-input"
                    value = {candidate.phoneNumber}
                    onChange={handleChange} />
                <label>Email:</label>
                <input 
                    name = "email"
                    type = "email"
                    className = "update-candidate-input"
                    value = {candidate.email}
                    onChange={handleChange} />
                <label>Linkedin:</label>
                <input 
                    name = "LinkedInProfile"
                    type = "string"
                    className = "update-candidate-input"
                    value = {candidate.LinkedInProfile}
                    onChange={handleChange} />
                <Link to="/candidates" onClick={handleSubmit}>
                    <button type="button" id="update-candidate-button">Update Candidate</button>
                </Link>
            </form>
            <Link to="/candidates">
            <button className="delete" onClick={handleDelete}>Delete Candidate
            </button>
            </Link>
        </div>
    )
}