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
    <div className="main-page-passport-container">
      <div className="passport-left passport-page">
        <h2>My Destinations</h2>
        <button id ="add-candidate-button-2" onClick={() => setShowForm(true)}>Add Candidate</button>
        {showForm && <CandidateForm onCandidateAdded={handleCandidateAdded} />}
      </div>
      <div className="passport-right passport-page">
        {candidates.map((candidate, index) => (
        <CandidateListCard candidate={candidate} index={index} key={index} />
        ))}
      </div>    
    </div>
    </>
  );
}
