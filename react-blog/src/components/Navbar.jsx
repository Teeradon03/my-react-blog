import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <h3>Blog Application</h3>
        </Link>
        <Link to="/">Home</Link>
        <Link to="blogs">All article</Link>
        <Link to="about">About</Link>
      </nav>
    </>
  );
}
