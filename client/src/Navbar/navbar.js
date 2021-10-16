import { Link } from 'react-router-dom';
import "./navbar.css";

export default function Navbar() {
	return (
		<div>
			<nav className="navMenu">
				<Link className="linkStyle" to="/">Wether </Link>
				<Link className="linkStyle" to="/chat">Chat </Link>
				<div className="dot"></div>
			</nav>
		</div>
	);
}