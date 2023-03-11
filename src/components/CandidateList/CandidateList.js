import { useState, useEffect } from "react";
import CandidateListCard from "./CandidateListCard";
import CandidateForm from "../CandidateForm/CandidateForm";
import * as candidatesAPI from "../../utilities/candidate-api";
import './CandidateList.css'

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [showForm, setShowForm] = useState(false); // add a state variable to track whether to show the form

  useEffect(function () {
    async function getCandidates() {
      const candidates = await candidatesAPI.getCandidate();
      setCandidates(candidates);
    }
    getCandidates();
  }, []);


  async function handleCandidateAdded(addedCandidate) {
    setCandidates([...candidates, addedCandidate]);
  }

  return (
    <>
    <div className="candidate-list-container">
      <div>
        <h2>My Candidates</h2>
        <button id ="add-candidate-button-2" onClick={() => setShowForm(true)}>Add Candidate</button>
        {showForm && <CandidateForm onCandidateAdded={handleCandidateAdded} />}
      </div>
      <div>
        {candidates.map((candidate, index) => (
        <CandidateListCard candidate={candidate} index={index} key={index} />
        ))}
      </div>    
    </div>
    </>
  );
}
