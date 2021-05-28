import React from 'react';

function Login() {
	return (
		<div className="holder">
			<div className="container">
				<h2 className="text-center">Login Your Account</h2>
				<form action="/">
					<div className="form-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="E-mail"
						/>
					</div>
					<div className="form-group mb-3">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
						/>
					</div>
					<div className="form-group mb-3">
						<input
							type="password"
							className="form-control"
							placeholder="Confirm Password"
						/>
					</div>
					<div className="text-center">
						<br />
						<button type="button" className="btn">
              Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
