import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="nav-container">
            <dt> <Link to="/qcard"> Main Page </Link> </dt>
            <dt> <Link to="/qcard/form">Application Form</Link> </dt>
            <dt> <Link to="/qcard/1234">Example user: 1234</Link> </dt>
        </nav>
    )
}