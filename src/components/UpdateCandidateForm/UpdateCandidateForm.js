import { useState } from "react"
import * as candidatesAPI from "../../utilities/candidate-api"
import { Link } from 'react-router-dom';
import './UpdateCandidateForm.css'

export default function UpdateCandidateForm({ data }) {
        //assign value of candidate _id
    const candidateId = `${data.candidate._id}`

    const [candidate, setCandidate] = useState({
        candidate: `${data.candidate.candidate}`,
        dateFrom: `${data.candidate.dateFrom}`,
        dateTo: `${data.candidate.dateTo}`,
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
                <label>Candidate:</label>
                <input  
                    name = "candidate"
                    type = "text"
                    className= "update-candidate-input"
                    value = {candidate.candidate}
                    onChange = {handleChange} />
                <label>From:</label>
                <input  
                    name = "dateFrom"
                    type = "date"
                    className = "update-candidate-input"
                    value = {candidate.dateFrom}
                    onChange={handleChange} />
                <label>To:</label>
                <input 
                    name = "dateTo"
                    type = "date"
                    className = "update-candidate-input"
                    value = {candidate.dateTo}
                    onChange={handleChange} />                
                <Link to="/candidates" onClick={handleSubmit}>
                    <button type="button" id="update-candidate-button">Update Destination</button>
                </Link>
            </form>
            <Link to="/candidates">
            <button onClick={handleDelete}>Delete Trip
            </button>
            </Link>
        </div>
    )
}