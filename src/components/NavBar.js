import React from 'react';

function NavBar() {
	return (
		<div className="has-smround-btns has-loader-bg equal-height">
			<header className="hdr-wrap">
				<div className="hdr-content hdr-content-sticky">
					<div className="container">
						<div className="row">
							<div className="col-auto show-mobile">
								<div className="menu-toggle">
									<a href="/" aria-label="Menu" className="mobilemenu-toggle">
										<i className="icon-menu" />
									</a>
								</div>
							</div>
							<div className="col-auto hdr-logo">
								<a href="/" className="logo">
									<img src="images/skins/fashion/logo.png" alt="Logo" />
								</a>
							</div>
							<div className="hdr-nav hide-mobile nav-holder-s" />
							<div className="hdr-links-wrap col-auto ml-auto">
								<div className="hdr-inline-link">
									<div className="search_container_desktop">
										<div className="dropdn dropdn_search dropdn_fullwidth">
											<a
												href="/"
												className="dropdn-link  js-dropdn-link only-icon"
												aria-label="Search"
											>
												<i className="icon-search" />
												<span className="dropdn-link-txt">Search</span>
											</a>
											<div className="dropdn-content">
												<div className="container">
													<form
														method="get"
														action="#"
														className="search search-off-popular"
													>
														<input
															name="search"
															type="text"
															className="search-input input-empty"
															placeholder="What are you looking for?"
														/>
														<button type="submit" className="search-button">
															<i className="icon-search" />
														</button>
														<a
															href="/"
															className="search-close js-dropdn-close"
														>
															<i className="icon-close-thin" />
														</a>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div className="dropdn dropdn_wishlist">
										<a
											href="account-wishlist.html"
											className="dropdn-link only-icon wishlist-link "
										>
											<i className="icon-heart" />
											<span className="dropdn-link-txt">Wishlist</span>
											<span className="wishlist-qty">3</span>
										</a>
									</div>
									<div className="dropdn dropdn_account dropdn_fullheight">
										<a
											href="/"
											className="dropdn-link js-dropdn-link js-dropdn-link only-icon"
											data-panel="#dropdnAccount"
										>
											<i className="icon-user" />
											<span className="dropdn-link-txt">Account</span>
										</a>
									</div>
									<div className="dropdn dropdn_fullheight minicart">
										<a
											href="/"
											className="dropdn-link js-dropdn-link minicart-link only-icon"
											data-panel="#dropdnMinicart"
										>
											<i className="icon-basket" />
											<span className="minicart-qty">3</span>
											<span className="minicart-total hide-mobile">$34.99</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hdr">
					<div className="hdr-topline hdr-topline--dark js-hdr-top">
						<div className="container">
							<div className="row flex-nowrap">
								<div className="col hdr-topline-left hide-mobile">
									<div className="hdr-line-separate">
										<ul className="social-list list-unstyled">
											<li>
												<a href="/">
													<i className="icon-facebook" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="icon-twitter" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="icon-google" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="icon-instagram" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="icon-vimeo" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="icon-linkedin" />
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="col hdr-topline-center">
									<div
										className="custom-text js-custom-text-carousel"
										data-slick='{"speed": 1000, "autoplaySpeed": 3000}'
									>
										<div className="custom-text-item">
											<i className="icon-fox" />
											Use promocode
											<span>GENERIC</span>
											to get 15% discount!
										</div>
										<div className="custom-text-item">
											<i className="icon-air-freight" />
											<span>Free</span>
											plane shipping over
											<span>$250</span>
										</div>
										<div className="custom-text-item">
											<i className="icon-gift" />
											Today only! Post
											<span>holiday</span>
											Flash Sale! 2 for $20
										</div>
									</div>
								</div>
								<div className="col hdr-topline-right hide-mobile">
									<div className="hdr-inline-link">
										<div className="dropdn_language">
											<div className="dropdn dropdn_language dropdn_language--noimg dropdn_caret">
												<a href="/" className="dropdn-link js-dropdn-link">
													<span className="js-dropdn-select-current">
														English
													</span>
													<i className="icon-angle-down" />
												</a>
												<div className="dropdn-content">
													<ul>
														<li className="active">
															<a href="/">
																<img src="images/flags/en.webp" alt="" />
																English
															</a>
														</li>
														<li>
															<a href="/">
																<img src="images/flags/sp.webp" alt="" />
																Spanish
															</a>
														</li>
														<li>
															<a href="/">
																<img src="images/flags/de.webp" alt="" />
																German
															</a>
														</li>
														<li>
															<a href="/">
																<img src="images/flags/fr.webp" alt="" />
																French
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="dropdn_currency">
											<div className="dropdn dropdn_caret">
												<a href="/" className="dropdn-link js-dropdn-link">
													US dollars
													<i className="icon-angle-down" />
												</a>
												<div className="dropdn-content">
													<ul>
														<li className="active">
															<a href="/">
																<span>US dollars</span>
															</a>
														</li>
														<li>
															<a href="/">
																<span>Euro</span>
															</a>
														</li>
														<li>
															<a href="/">
																<span>UK pounds</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="hdr_container_desktop">
											<div className="dropdn dropdn_account dropdn_fullheight">
												<a
													href="/"
													className="dropdn-link js-dropdn-link"
													data-panel="#dropdnAccount"
												>
													<i className="icon-user" />
													<span className="dropdn-link-txt">Account</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hdr-content">
						<div className="container">
							<div className="row">
								<div className="col-auto show-mobile">
									<div className="menu-toggle">
										<a href="/" className="mobilemenu-toggle">
											<i className="icon-menu" />
										</a>
									</div>
								</div>
								<div className="col-auto hdr-logo">
									<a href="/" className="logo">
										<img src="images/skins/fashion/logo.png" alt="Logo" />
									</a>
								</div>
								<div className="hdr-nav hide-mobile nav-holder justify-content-center px-4">
									<ul className="mmenu mmenu-js">
										<li className="mmenu-item--simple">
											<a href="/category">Category</a>
										</li>
										<li className="mmenu-item--simple">
											<a href="/address">Account</a>
										</li>
										<li className="mmenu-item--simple">
											<a href="/signup">Sign up</a>
										</li>
										<li className="mmenu-item--simple">
											<a href="/login">Login</a>
										</li>
									</ul>
								</div>
								<div className="hdr-links-wrap col-auto ml-auto">
									<div className="hdr-inline-link">
										<div className="dropdn dropdn_wishlist">
											<a
												href="account-wishlist.html"
												className="dropdn-link only-icon wishlist-link "
											>
												<i className="icon-heart" />
												<span className="dropdn-link-txt">Wishlist</span>
												<span className="wishlist-qty">3</span>
											</a>
										</div>
										<div className="hdr_container_mobile show-mobile">
											<div className="dropdn dropdn_account dropdn_fullheight">
												<a
													href="/"
													className="dropdn-link js-dropdn-link"
													data-panel="#dropdnAccount"
												>
													<i className="icon-user" />
													<span className="dropdn-link-txt">Account</span>
												</a>
											</div>
										</div>
										<div className="dropdn dropdn_fullheight minicart">
											<a
												href="/"
												className="dropdn-link js-dropdn-link minicart-link"
												data-panel="#dropdnMinicart"
											>
												<i className="icon-basket" />
												<span className="minicart-qty">3</span>
												<span className="minicart-total hide-mobile">
													$34.99
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default NavBar;
