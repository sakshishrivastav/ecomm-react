import React from 'react';

function Footer() {
	return (
		<div>
			<footer className="page-footer footer-style-6 ">
				<div className="holder ">
					<div className="footer-shop-info">
						<div className="container">
							<div className="text-icn-blocks-bg-row">
								<div className="text-icn-block-footer">
									<div className="icn">
										<i className="icon-trolley" />
									</div>
									<div className="text">
										<h4>Extra fast delivery</h4>
										<p>
                      Your order will be delivered 3-5 business days after all
                      of your items are available
										</p>
									</div>
								</div>
								<div className="text-icn-block-footer">
									<div className="icn">
										<i className="icon-currency" />
									</div>
									<div className="text">
										<h4>Best price</h4>
										<p>
                      We&apos;ll match the product prices of key online and
                      local competitors for immediately
										</p>
									</div>
								</div>
								<div className="text-icn-block-footer">
									<div className="icn">
										<i className="icon-diplom" />
									</div>
									<div className="text">
										<h4>Guarantee</h4>
										<p>
                      If the item you want is available, we can process a return
                      and place a new order
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-top">
					<div className="container">
						<div className="row mt-0">
							<div className="col-lg col-xl last-mobile col-no-collapsed">
								<div className="footer-block">
									<div className="footer-logo">
										<a href="index.html">
											<img src="images/logo.png" alt="Logo" />
										</a>
									</div>
									<div className="collapsed-content">
										<ul>
											<li>
                        E-mail:
												<a href="mailto:Genericshop@gmail.com">
                          Genericshop@gmail.com
												</a>
											</li>
											<li>Hours: 10:00 - 18:00, Mon - Fri</li>
										</ul>
									</div>
									<ul className="social-list">
										<li>
											<a href="/" className="icon icon-facebook" />
										</li>
										<li>
											<a href="/" className="icon icon-twitter" />
										</li>
										<li>
											<a href="/" className="icon icon-google" />
										</li>
										<li>
											<a href="/" className="icon icon-vimeo" />
										</li>
										<li>
											<a href="/" className="icon icon-youtube" />
										</li>
										<li>
											<a href="/" className="icon icon-pinterest" />
										</li>
									</ul>
									<div className="d-lg-none mt-3">
										<div className="box-coupon">
											<div className="box-coupon-icon">
												<i className="icon-scissors" />
											</div>
											<div className="box-coupon-text">
												<span className="custom-color">GENERIC</span>
												{' '}
                        THEME
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg col-xl">
								<div className="footer-block collapsed-mobile">
									<div className="title">
										<h4>Information</h4>
										<span className="toggle-arrow">
											<span />
											<span />
										</span>
									</div>
									<div className="collapsed-content">
										<ul>
											<li>
												<a href="faq.html">FAQ</a>
											</li>
											<li>
												<a href="contact.html">Contact Us</a>
											</li>
											<li>
												<a href="typography.html">Terms &amp; Conditions</a>
											</li>
											<li>
												<a href="typography.html">Returns &amp; Exchanges</a>
											</li>
											<li>
												<a href="typography.html">Shipping &amp; Delivery</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg col-xl">
								<div className="footer-block collapsed-mobile">
									<div className="title">
										<h4>Account details</h4>
										<span className="toggle-arrow">
											<span />
											<span />
										</span>
									</div>
									<div className="collapsed-content">
										<ul>
											<li>
												<a href="account-details.html">My Account</a>
											</li>
											<li>
												<a href="cart.html">View Cart</a>
											</li>
											<li>
												<a href="account-wishlist.html">My Wishlist</a>
											</li>
											<li>
												<a href="account-history.html">Order Status</a>
											</li>
											<li>
												<a href="account-history.html">Track My Order</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg col-xl">
								<div className="footer-block collapsed-mobile">
									<div className="title">
										<h4>Safe payments</h4>
										<span className="toggle-arrow">
											<span />
											<span />
										</span>
									</div>
									<div className="collapsed-content">
										<ul className="payment-link">
											<li>
												<i className="icon-google-pay-logo" />
											</li>
											<li>
												<i className="icon-visa-pay-logo" />
											</li>
											<li>
												<i className="icon-apple-pay-logo" />
											</li>
										</ul>
									</div>
									<div className="d-none d-lg-block">
										<div className="box-coupon">
											<div className="box-coupon-icon">
												<i className="icon-scissors" />
											</div>
											<div className="box-coupon-text">
												<span className="custom-color">GENERIC</span>
												{' '}
                        THEME
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom footer-bottom--bg">
					<div className="container">
						<div className="footer-copyright text-center">
							<a href="/">Genericshop</a>
							{' '}
              ©2020 copyright
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
