import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="section__container footer__container">
				<div className="footer__col">
					<h3>Syria Jet Management</h3>
					<p>
						Your all-in-one solution for air travel — from booking commercial
						flights to private jet hires and aircraft sales.
					</p>
					<p>
						Experience unparalleled convenience and personalized service with
						Syria Jet Management Air Services.
					</p>
				</div>
				<div className="footer__col">
					<h4>INFORMATION</h4>
					<p>
						<a href="/Landing page/index.html">Home</a>
					</p>
					<p>
						<a href="/Landing page/aboutUs.html">About</a>
					</p>
					{/* <p><a href="#">Offers</a></p> */}
					<p>
						<a href="/Landing page/contact.html">Contact</a>
					</p>
					{/* <p><a href="#">FAQs</a></p> */}
				</div>
				<div className="footer__col">
					<h4>CONTACT</h4>
					<p>
						<a href="#">Support</a>
					</p>
					<p>
						<a href="#">Media</a>
					</p>
					<p>
						<a href="#">Socials</a>
					</p>
				</div>
			</div>
			<div className="section__container footer__bar">
				<p>Copyright © 2025 Syria Jet Management. All rights reserved.</p>
				<div className="socials">
					<span>
						<i className="ri-facebook-fill" />
					</span>
					<span>
						<i className="ri-twitter-fill" />
					</span>
					<span>
						<i className="ri-instagram-line" />
					</span>
					<span>
						<i className="ri-youtube-fill" />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
