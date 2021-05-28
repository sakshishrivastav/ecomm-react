import React, { useState } from 'react';
import { API_URL } from './../utils/constants';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Signup()
{
	const history = useHistory();
	const [user, setuser] = useState()
	const handleSignup = async () => {
	
		try {
			console.log(user);
			const { data } = await axios({
				method: 'post',
				url: API_URL + '/users',
				data: user,
			});
			localStorage.setItem('token', data.token)
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	}
	
	return (
		<div className="holder">
			<div className="container">
				<h2 className="text-center">Create an Account</h2>
				<p>
					To access your whishlist, address book and contact preferences and to
					take advantage of our speedy checkout, create an account with us now.
				</p>
				<form action="/">
					<div className="row">
						<div className="col-md-6 mb-3">
							<div className="form-group">
								<input
									onChange={(e) => {
										setuser({ ...user, firstname: e.target.value });
									}}
									type="text"
									className="form-control"
									placeholder="First name"
									id="firstname"
								/>
							</div>
						</div>
						<div className="col-md-6 mb-3">
							<div className="form-group">
								<input
									onChange={(e) => {
										setuser({ ...user, lastname: e.target.value });
									}}
									id="lastname"
									type="text"
									className="form-control"
									placeholder="Last name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group mb-3">
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							onChange={(e) => {
								setuser({ ...user, email: e.target.value });
							}}
							id="email"
						/>
					</div>
					<div className="form-group mb-3">
						<input
							type="password"
							className="form-control"
							placeholder=" password"
							onChange={(e) => {
								setuser({ ...user, password: e.target.value });
							}}
							id="password"
						/>
					</div>
					<div className="clearfix" />
					<input
						id="checkbox1"
						name="checkbox1"
						type="checkbox"
						checked="checked"
					/>
					<label htmlFor="checkbox1">
						By registering your details you agree to our
						<a
							href="/"
							className="custom-color"
							data-fancybox
							data-src="#modalTerms"
						>
							Terms and Conditions
						</a>
						and
						<a
							href="/"
							className="custom-color"
							data-fancybox
							data-src="#modalCookies"
						>
							Cookie Policy
						</a>
					</label>
					<div className="text-center">
						<br />
						<button type="button" className="btn" onClick={handleSignup}>
							create an account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
