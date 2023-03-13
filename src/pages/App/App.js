import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Candidates from "../Candidates/Candidates";
import CandidateDetailPage from "../CandidateDetailPage/CandidateDetailPage";
import Roles from "../Roles/Roles";
import RoleDetailPage from "../RoleDetailPage/RoleDetailPage";
import AuthPage from "../AuthPage/AuthPage"
import NavBar from "../../components/NavBar/NavBar";
import './App.css';

import { getUser } from "../../utilities/users-service"

export default function App() {

      //getUser will insert token if there is one in local storage 
      //otherwise it will be a value of "null"
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes >
            <Route path="/candidates" element={<Candidates />} />
            <Route path=":candidate" element={<CandidateDetailPage />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/:role" element={<RoleDetailPage />} />
            <Route path="/*" element={<Navigate to="/candidates" />} />
          </Routes> 
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


