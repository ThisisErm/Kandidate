import { useState } from "react"
import * as candidatesAPI from "../../utilities/candidate-api"
import './CandidateForm.css'

export default function CandidateForm({ onCandidateAdded }) {
  const [candidate, setCandidate] = useState({
    candidate: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(event) {
    setCandidate({ ...candidate, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const addedCandidate = await candidatesAPI.addCandidate(candidate);
    onCandidateAdded(addedCandidate);
    setCandidate({ candidate: "", dateFrom: "", dateTo: "" });
  }

    return(
        <>
        <div className="candidate-form-container">
            <form onSubmit={handleSubmit} id="add-candidate-form">
                <label className="add-candidate-label">Candidate:</label>
                <input 
                    name = "candidate"
                    type = "text" 
                    className = "candidate-form-input"
                    value={candidate.candidate}
                    onChange = {handleChange} />
                <label className="add-candidate-label">From:</label>
                <input 
                    name = "dateFrom"
                    type = "date"  
                    className = "candidate-form-input"
                    value={candidate.dateFrom}
                    onChange = {handleChange} />
                <label className="add-candidate-label">To:</label>
                <input 
                    name = "dateTo"
                    type = "date"  
                    className = "candidate-form-input"
                    value={candidate.dateTo}
                    onChange = {handleChange} />     
                <button type="submit" id="add-candidate-button">Add Past Trip</button>
            </form>
        </div>
        </>
    )
}