import { useState } from "react"
import * as candidatesAPI from "../../utilities/candidate-api"
import './CandidateForm.css'

export default function CandidateForm({ onCandidateAdded }) {
  const [candidate, setCandidate] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    LinkedInProfile: "",
  });

  function handleChange(event) {
    setCandidate({ ...candidate, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const addedCandidate = await candidatesAPI.addCandidate(candidate);
    onCandidateAdded(addedCandidate);
    setCandidate({ fullName: "", phoneNumber: "", email: "", LinkedInProfile: ""  });
  }

    return(
        <>
        <div className="candidate-form-container">
            <form onSubmit={handleSubmit} id="add-candidate-form">
                <label className="add-candidate-label">Full Name:</label>
                <input 
                    name = "fullName"
                    type = "text" 
                    className = "candidate-form-input"
                    value={candidate.fullName}
                    onChange = {handleChange} />
                <label className="add-candidate-label">Phone Number:</label>
                <input 
                    name = "phoneNumber"
                    type = "tel"  
                    className = "candidate-form-input"
                    value={candidate.phoneNumber}
                    onChange = {handleChange} />
                <label className="add-candidate-label">Email:</label>
                <input 
                    name = "email"
                    type = "email"  
                    className = "candidate-form-input"
                    value={candidate.email}
                    onChange = {handleChange} />     
                  <label className="add-candidate-label">LinkedIn Profile:</label>
                <input 
                    name = "LinkedInProfile"
                    type = "string"  
                    className = "candidate-form-input"
                    value={candidate.LinkedInProfile}
                    onChange = {handleChange} />    
                <button type="submit" id="add-candidate-button">Add new candidate</button>
            </form>
        </div>
        </>
    )
}