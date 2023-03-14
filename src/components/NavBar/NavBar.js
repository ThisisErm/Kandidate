import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        //we should delagate the actual logging out to the users service
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to="/roles" className="nav-link">Roles</Link>
            <Link to="/candidates" className="nav-link">Candidates</Link>
            &nbsp; | &nbsp;
            <span className="welcome-message"> Hello, {user.name}</span>
            <Link to="" onClick={handleLogOut} className="nav-link">Log Out</Link>
        </nav>
    )
}