import { Link } from "react-router-dom"
import "./CandidateListCard.css"

export default function CandidateListCard({ candidate }){
    
    return(
        <>
        <Link to={`/${candidate.candidate}`} state={{ data: {candidate}}}>
            <h2>{candidate.candidate}</h2> 
        </Link> 
            <span id="start-date-candidate-list-card"><p>Start Date: {candidate.dateFrom}</p></span>
        </>
    )
}