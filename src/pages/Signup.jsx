import { Link } from "react-router-dom";
import "../assets/css/main.css";
import useAuthStore from "../stores/useAuthStore";
import { useState } from "react";
const Signup = () => {
	const { register } = useAuthStore();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		register(username, email, password);
	};

	return (
		<section className="signin-section">
			<div className="container-fluid">
				<div className="row g-0 auth-row">
					<div className="col-lg-6">
						<div className="auth-cover-wrapper bg-primary-100">
							<div className="auth-cover">
								<div className="title text-center">
									<h1 className="text-primary mb-10">Get Started</h1>
									<p className="text-medium">
										Join us and take control of your private air travel.
										<br className="d-sm-block" />
										for you customers.
									</p>
								</div>
								<div className="cover-image">
									<img
										src="/dashboard/assets/images/auth/signin-image.svg"
										alt=""
									/>
								</div>
								<div className="shape-image">
									<img src="/dashboard/assets/images/auth/shape.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
					{/* end col */}
					<div className="col-lg-6">
						<div className="signup-wrapper">
							<div className="form-wrapper">
								<h6 className="mb-15">Sign Up Form</h6>
								<p className="text-sm mb-25">
									Begin your journey with Syria Jet Management.
								</p>
								<form id="signup-form" onSubmit={handleRegister}>
									<div className="row">
										<div className="col-12">
											<div className="input-style-1">
												<label>Username</label>
												<input
													type="text"
													placeholder="Name"
													required
													onChange={(e) => {
														setUsername(e.target.value);
													}}
												/>
											</div>
										</div>
										{/* end col */}
										<div className="col-12">
											<div className="input-style-1">
												<label>Email</label>
												<input
													type="email"
													placeholder="Email"
													required
													onChange={(e) => {
														setEmail(e.target.value);
													}}
												/>
											</div>
										</div>
										{/* end col */}
										<div className="col-12">
											<div className="input-style-1">
												<label>Password</label>
												<input
													type="password"
													placeholder="Password"
													id="password"
													required
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
												<p
													id="password-error"
													style={{ color: "red", fontSize: "0.9em" }}
												/>
											</div>
											{/* <div class="thingspasswordshouldcontain">
                  <h5>Your password Should Contain</h5>
                  <p>At least one Upper case Value</p>
                  <p>At least one Number</p>
                  <p>At least one Special character</p>
                </div>
                <br> */}
										</div>
										{/* end col */}
										<div className="col-12">
											{/* <div className="input-style-1">
												<label>Confirm Password</label>
												<input
													type="password"
													placeholder="Password"
													id="confirm-password"
													required=""
												/>
												<p
													id="confirm-password-error"
													style={{ color: "red", fontSize: "0.9em" }}
												/>
											</div> */}
										</div>
										{/* end col */}
										<div className="col-12">
											<div className="button-group d-flex justify-content-center flex-wrap">
												<button
													type="submit"
													className="main-btn primary-btn btn-hover w-100 text-center"
												>
													Sign Up
												</button>
											</div>
										</div>
									</div>
									{/* end row */}
								</form>
								<div className="singup-option pt-40">
									{/* <p class="text-sm text-medium text-center text-gray">
                Easy Sign Up With
              </p> */}
									{/* <div class="button-group pt-40 pb-40 d-flex justify-content-center flex-wrap">
                <button class="main-btn primary-btn-outline m-2">
                  <i class="lni lni-facebook-fill mr-10"></i>
                  Facebook
                </button>
                <button class="main-btn danger-btn-outline m-2">
                  <i class="lni lni-google mr-10"></i>
                  Google
                </button>
              </div> */}
									<p className="text-sm text-medium text-dark text-center">
										Already have an account? <Link to="/login">Sign In</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* end col */}
				</div>
				{/* end row */}
			</div>
		</section>
	);
};

export default Signup;
