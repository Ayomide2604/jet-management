import { Link } from "react-router-dom";
import "../assets/css/main.css";
const Login = () => {
	return (
		<div className="row g-0 auth-row">
			<div className="col-lg-6">
				<div className="auth-cover-wrapper bg-primary-100">
					<div className="auth-cover">
						<div className="title text-center">
							<h1 className="text-primary mb-10">Welcome Back</h1>
							<p className="text-medium">
								Sign in to your Existing account to continue
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
				<div className="signin-wrapper">
					<div className="form-wrapper">
						<h6 className="mb-15">Sign In Form</h6>
						<p className="text-sm mb-25">
							Your gateway to personalized air travel.
						</p>
						<form action="#">
							<div className="row">
								<div className="col-12">
									<div className="input-style-1">
										<label>Email</label>
										<input type="email" placeholder="Email" />
									</div>
								</div>
								{/* end col */}
								<div className="col-12">
									<div className="input-style-1">
										<label>Password</label>
										<input type="password" placeholder="Password" />
									</div>
								</div>
								{/* end col */}
								<div className="col-xxl-6 col-lg-12 col-md-6">
									<div className="form-check checkbox-style mb-30">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue=""
											id="checkbox-remember"
										/>
										<label
											className="form-check-label"
											htmlFor="checkbox-remember"
										>
											Remember me next time
										</label>
									</div>
								</div>
								{/* end col */}
								<div className="col-xxl-6 col-lg-12 col-md-6">
									<div className="text-start text-md-end text-lg-start text-xxl-end mb-30">
										<a href="Forgot_Password.html" className="hover-underline">
											Forgot Password?
										</a>
									</div>
								</div>
								{/* end col */}
								<div className="col-12">
									<div className="button-group d-flex justify-content-center flex-wrap">
										<button className="main-btn primary-btn btn-hover w-100 text-center">
											<a href="../dashboard/index.html">Sign In</a>
										</button>
									</div>
								</div>
							</div>
							{/* end row */}
						</form>
						<div className="singin-option pt-40">
							{/* <p class="text-sm text-medium text-center text-gray">
            Easy Sign In With
          </p>
          <div class="button-group pt-40 pb-40 d-flex justify-content-center flex-wrap">
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
								Don’t have any account yet?
								<Link to="/signup">Create an account</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* end col */}
		</div>
	);
};

export default Login;
