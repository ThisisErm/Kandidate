import { useLocation  } from "react-router-dom"
import { useEffect, useState } from "react"
import UpdateCandidateForm from "../../components/UpdateCandidateForm/UpdateCandidateForm"
import * as candidatesAPI from "../../utilities/candidate-api"
// import NoteForm from "../../components/NoteForm/NoteForm"
// import NoteCard from "../../components/NoteCard/NoteCard"
import './CandidateDetailPage.css'

export default function CandidateDetailPage() {
        //react component that allows a prop to be based via Link
    const candidate = useLocation ()
    const { data } = candidate.state

    const [showForm, setShowForm] = useState(false)
    const [candidateData, setCandidateData] = useState({ note: [] })

    useEffect(function() {
        async function show() {
             const candidateApiData = await candidatesAPI.showCandidate(data.candidate._id)
             setCandidateData(candidateApiData)
        }
       show()
    }, [])

    // function onAddNote(newNote) {
    //     let notes = [...candidateData.note, newNote];
    //     setCandidateData({ ...candidateData, note: notes });
    // }

    //implement in version 2
    //function onUpdateNote(note) {}
    return (
        <>
            <div className="main-page-container">
                <div>
                    <h2>{candidateData.fullName}</h2>
                    <p>Phone: {candidateData.phoneNumber}</p>
                    <p>Email: {candidateData.email}</p>
                    <p>{candidateData.LinkedInProfile}</p>
                    


                    <button id="update-candidate-button-2" onClick={() => setShowForm(!showForm)}>Edit Candidate</button> 
                    {showForm ? (<UpdateCandidateForm data={data}/>) : " "}
                </div>
            </div>
        </>
    )
}