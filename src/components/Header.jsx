import { Link } from "react-router-dom";
import logo from "../assets/img/landing_page/logo.png";
import "../assets/css/landing_page.css";
const Header = () => {
	return (
		<nav style={{ marginBottom: "15px" }}>
			<a href="/index.html" className="nav__logo">
				<img src={logo} alt="" />
			</a>
			<ul className="nav__links">
				<li className="link">
					<a href="/Landing page/index.html" className="active">
						Home
					</a>
				</li>
				<li className="link">
					<a href="/Landing page/aboutUs.html">About Us</a>
				</li>
				{/* <li className="link">
					<a href="#">Offers</a>
				</li> */}
				<li className="link">
					<a href="/Landing page/contact.html">Contact</a>
				</li>
				{/* <li className="link">
					<a href="#">FAQs</a>
				</li> */}
			</ul>
			<div className="oneside">
				<div className="mobile-nav-toggle" id="mobile-nav-toggle">
					<i className="ri-menu-line"></i>
				</div>
				{/* From Uiverse.io by vinodjangid07  */}
				<Link to="/login" className="Btn-Container">
					<span className="text">Sign In</span>
					<span className="icon-Container">
						<svg
							width="16"
							height="19"
							viewBox="0 0 16 19"
							fill="nones"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
							<circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
							<circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
							<circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
							<circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
							<circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
							<circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
							<circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
							<circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
							<circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
						</svg>
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
