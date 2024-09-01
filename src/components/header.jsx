import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <Link to="/" className="logo">Lauren Dostal</Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}