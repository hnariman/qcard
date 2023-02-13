import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="nav-container">
            <dt> <Link to="/"> Main Page </Link> </dt>
            <dt> <Link to="/form">Application Form</Link> </dt>
            <dt> <Link to="/1234">Example user: 1234</Link> </dt>
        </nav>
    )
}