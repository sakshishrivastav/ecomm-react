import React,{useState} from 'react';
import Wishlist from '../components/Wishlist';

function Address() {


	const showtab = (e, i) => {
		const curr = [];
		curr[i] = curr[i] ? 0 : 1;
		setopenTab(curr);
	};

	const [openTab, setopenTab] = useState([1, 0, 0, 0]);

	return (
		<div className="page-content">
			<div className="holder breadcrumbs-wrap mt-0">
				<div className="container">
					<ul className="breadcrumbs">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<span>My account</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="holder">
				<div className="container">
					<div className="row">
						<div className="col-md-3 aside aside--left">
							<div className="list-group">
								<span
									onClick={(e) => showtab(e, 0)}
									className={`list-group-item ${openTab?.[0] ? 'active' : ''}`}
								>
									Account Details
								</span>
								<span
									onClick={(e) => showtab(e, 1)}
									className={`list-group-item ${openTab?.[1] ? 'active' : ''}`}
								>
									My Addresses
								</span>
								<span
									onClick={(e) => showtab(e, 2)}
									className={`list-group-item ${openTab?.[2] ? 'active' : ''}`}
								>
									My Wishlist
								</span>
								<span
									onClick={(e) => showtab(e, 3)}
									className={`list-group-item ${openTab?.[3] ? 'active' : ''}`}
								>
									My Order History
								</span>
								<a
									onClick={(e) => showtab(e, 4)}
									className={`list-group-item disabled ${
										openTab?.[4] ? 'active' : ''
									}`}
								>
									My Reviews
								</a>
								<a
									onClick={(e) => showtab(e, 5)}
									className={`list-group-item disabled ${
										openTab?.[5] ? 'active' : ''
									}`}
								>
									My Saved Tags
								</a>
								<a
									onClick={(e) => showtab(e, 6)}
									className={`list-group-item disabled ${
										openTab?.[6] ? 'active' : ''
									}`}
								>
									Compare Products
								</a>
							</div>
						</div>
						<div className="col-md aside">
							<div className="tab-content">
								<div
									className={`tab-pane fade ${
										openTab?.[0] ? 'show active' : null
									}`}
									role="tabpanel"
								>
									<div className="col-md-14 aside">
										<h1 className="mb-3">Account Details</h1>
										<div className="row vert-margin">
											<div className="col-sm-9">
												<div className="card">
													<div className="card-body">
														<h3>Personal Info</h3>
														<p>
															<b>First Name:</b>
															Jenny
															<br />
															<b>Last Name:</b>
															Raider
															<br />
															<b>E-mail:</b>
															jennyraider@hotmail.com
															<br />
															<b>Phone:</b>
															876-432-4323
														</p>
														<div className="mt-2 clearfix">
															<a
																href="/"
																className="link-icn js-show-form"
																data-form="/updateDetails"
															>
																<i className="icon-pencil" />
																Edit
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className={`tab-pane fade ${
										openTab?.[1] ? 'show active' : null
									}`}
									role="tabpanel"
								>
									<h1 className="mb-3">My Addresses</h1>
									<div className="row">
										<div className="col-sm-9">
											<div className="card">
												<div className="card-body">
													<h3>Address 1 (Default)</h3>
													<p>
														Thomas Nolan Kaszas
														<br /> 5322 Otter Ln Middleberge
														<br /> FL 32068 Palm Bay FL 32907
													</p>
													<div className="mt-2 clearfix">
														<a
															href="/"
															className="link-icn js-show-form"
															data-form="#updateAddress"
														>
															<i className="icon-pencil" />
															Edit
														</a>
														<a href="/" className="link-icn ml-1 float-right">
															<i className="icon-cross" />
															Delete
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-9 mt-2 mt-sm-0">
											<div className="card">
												<div className="card-body">
													<h3>Address 2</h3>
													<p>
														Yuto Murase 42 1
														<br />
														Motohakone Hakonemaci Ashigarashimo
														<br />
														Gun Kanagawa 250 05 JAPAN
													</p>
													<div className="mt-2 clearfix">
														<a
															href="/"
															className="link-icn js-show-form"
															data-form="#updateAddress"
														>
															<i className="icon-pencil" />
															Edit
														</a>
														<a href="/" className="link-icn ml-1 float-right">
															<i className="icon-cross" />
															Delete
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card mt-3 d-none" id="updateAddress">
										<div className="card-body">
											<h3>Edit Address</h3>
											<label className="text-uppercase">Country:</label>
											<div className="form-group select-wrapper">
												<select className="form-control">
													<option value="United States">United States</option>
													<option value="Canada">Canada</option>
													<option value="China">China</option>
													<option value="India">India</option>
													<option value="Italy">Italy</option>
													<option value="Mexico">Mexico</option>
												</select>
											</div>
											<label className="text-uppercase">State:</label>
											<div className="form-group select-wrapper">
												<select className="form-control">
													<option value="AL">Alabama</option>
													<option value="AK">Alaska</option>
													<option value="AZ">Arizona</option>
													<option value="AR">Arkansas</option>
													<option value="CA">California</option>
													<option value="CO">Colorado</option>
													<option value="CT">Connecticut</option>
													<option value="DE">Delaware</option>
													<option value="DC">District Of Columbia</option>
													<option value="FL">Florida</option>
													<option value="GA">Georgia</option>
													<option value="HI">Hawaii</option>
													<option value="ID">Idaho</option>
													<option value="IL">Illinois</option>
													<option value="IN">Indiana</option>
													<option value="IA">Iowa</option>
													<option value="KS">Kansas</option>
													<option value="KY">Kentucky</option>
													<option value="LA">Louisiana</option>
												</select>
											</div>
											<div className="row">
												<div className="col-sm-6">
													<label className="text-uppercase">City:</label>
													<div className="form-group">
														<input type="text" className="form-control" />
													</div>
												</div>
												<div className="col-sm-6">
													<label className="text-uppercase">
														zip/postal code:
													</label>
													<div className="form-group">
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="clearfix">
												<input
													id="formCheckbox1"
													name="checkbox1"
													type="checkbox"
												/>
												<label htmlFor="formCheckbox1">
													Set address as default
												</label>
											</div>
											<div className="mt-2">
												<button
													type="button"
													className="btn btn--alt js-close-form"
												>
													Cancel
												</button>
												<button type="submit" className="btn ml-1">
													Add Address
												</button>
											</div>
										</div>
									</div>
								</div>
								<div
									className={`tab-pane fade ${
										openTab?.[2] ? 'show active' : null
									}`}
									role="tabpanel"
								>
									<Wishlist />
								</div>
								<div
									className={`tab-pane fade ${
										openTab?.[3] ? 'show active' : null
									}`}
									role="tabpanel"
								>
									<div className="col-md-14 aside">
										<h1 className="mb-3">Order History</h1>
										<div className="table-responsive">
											<table className="table table-bordered table-striped table-order-history">
												<thead>
													<tr>
														<th scope="col"># </th>
														<th scope="col">Order Number</th>
														<th scope="col">Order Date </th>
														<th scope="col">Status</th>
														<th scope="col">Total Price</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>
															<b>175525</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>01.02.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$1252.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
													<tr>
														<td>2</td>
														<td>
															<b>189067</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>12.02.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$367.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
													<tr>
														<td>3</td>
														<td>
															<b>186543</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>03.04.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$587.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
													<tr>
														<td>4</td>
														<td>
															<b>209876</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>05.06.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$3654.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
													<tr>
														<td>5</td>
														<td>
															<b>215879</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>06.07.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$258.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
													<tr>
														<td>6</td>
														<td>
															<b>229876</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>12.08.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$314.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
													<tr>
														<td>7</td>
														<td>
															<b>268745</b>
															<a href="cart.html" className="ml-1">
																View Details
															</a>
														</td>
														<td>01.09.2017</td>
														<td>Shipped</td>
														<td>
															<span className="color">$522.00</span>
														</td>
														<td>
															<a href="/" className="btn btn--grey btn--sm">
																REORDER
															</a>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="text-right mt-2">
											<a href="/" className="btn btn--alt">
												Clear History
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Address;
