import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import UpdateCandidateForm from "../../components/UpdateCandidateForm/UpdateCandidateForm"
import * as candidatesAPI from "../../utilities/candidate-api"
import './CandidateDetailPage.css'

export default function CandidateDetailPage() {
    //react component that allows a prop to be based via Link
    const candidate = useLocation()
    const { data } = candidate.state

    const [showForm, setShowForm] = useState(false)
    const [candidateData, setCandidateData] = useState({ })

    useEffect(function () {
        async function show() {
            const candidateApiData = await candidatesAPI.showCandidate(data.candidate._id)
            setCandidateData(candidateApiData)
        }
        show()
    }, [])


    return (
        <>
            <div className="main-page-container">
                <div>
                    <h2>{candidateData.fullName}</h2>
                    <p>Phone: {candidateData.phoneNumber}</p>
                    <p>Email: {candidateData.email}</p>
                    <p><a href={`//${candidateData.LinkedInProfile}`} target="_blank">{candidateData.LinkedInProfile}</a></p>




                    <button id="update-candidate-button-2" onClick={() => setShowForm(!showForm)}>Edit Candidate</button>
                    {showForm ? (<UpdateCandidateForm data={data} />) : " "}
                </div>
            </div>
        </>
    )
}