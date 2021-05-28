import React, { useState } from 'react';

export default function NewArrival() {
	const [hoverstate, setHoverstate] = useState([0, 0, 0, 0]);
	const mouseEnter = (i) => {
		const change = [...hoverstate];
		change[i] = 1;
		setHoverstate(change);
	};
	const mouseLeave = (i) => {
		const change = [...hoverstate];
		change[i] = 0;
		setHoverstate(change);
	};
	return (
		<div className="container">
			<div className="title-wrap text-center">
				<h2 className="h1-style">New Arrival</h2>
				<p> Hurry Up!</p>
			</div>
			<div
				className="prd-grid product-listing data-to-show-4 data-to-show-md-3 data-to-show-sm-2"
				data-grid-tab-content=""
			>
				<div
					onMouseEnter={() => mouseEnter(0)}
					onMouseLeave={() => mouseLeave(0)}
					className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-xl ${
						hoverstate[0] ? 'hovered' : ''
					}`}
				>
					<div className="prd-inside">
						<div className="prd-img-area">
							<a
								href="product.html"
								className="prd-img image-hover-scale image-container"
								style={{ paddingBottom: '128.48%' }}
							>
								<img
									src="images/skins/fashion/products/product-02-1.webp"
									data-src="images/skins/fashion/products/product-02-1.webp"
									alt="Oversize Cotton Dress"
									className="js-prd-img fade-up ls-is-cached lazyloaded"
								/>
								<div className="generic-loader"></div>
								<div className="prd-big-squared-labels"></div>
							</a>
							<div className="prd-circle-labels">
								<a
									href="/"
									className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
									title="Add To Wishlist"
								>
									<i className="icon-heart-stroke"></i>
								</a>
								<a
									href="/"
									className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
									title="Remove From Wishlist"
								>
									<i className="icon-heart-hover"></i>
								</a>
								<a
									href="/"
									className="circle-label-qview js-prd-quickview prd-hide-mobile"
									data-src="ajax/ajax-quickview.html"
								>
									<i className="icon-eye"></i>
									<span>QUICK VIEW</span>
								</a>
								<div className="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
									<i className="icon-palette">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
										<span className="path4"></span>
										<span className="path5"></span>
										<span className="path6"></span>
										<span className="path7"></span>
										<span className="path8"></span>
										<span className="path9"></span>
										<span className="path10"></span>
									</i>
									<ul>
										<li data-image="images/skins/fashion/products/product-02-1.webp">
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title=""
												data-original-title="Color Name"
											>
												<img
													src="images/colorswatch/color-orange.webp"
													alt=""
												/>
											</a>
										</li>
										<li data-image="images/skins/fashion/products/product-02-color-2.webp">
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title=""
												data-original-title="Color Name"
											>
												<img src="images/colorswatch/color-red.webp" alt="" />
											</a>
										</li>
										<li data-image="images/skins/fashion/products/product-02-color-3.webp">
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title=""
												data-original-title="Color Name"
											>
												<img
													src="images/colorswatch/color-yellow.webp"
													alt=""
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<ul className="list-options color-swatch">
								<li
									data-image="images/skins/fashion/products/product-02-1.webp"
									className="active"
								>
									<a
										href="/"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-02-1.webp"
											data-src="images/skins/fashion/products/product-02-1.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-02-2.webp">
									<a
										href="/"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-02-2.webp"
											data-src="images/skins/fashion/products/product-02-2.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-02-3.webp">
									<a
										href="/"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-02-3.webp"
											data-src="images/skins/fashion/products/product-02-3.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className="prd-info">
							<div className="prd-info-wrap">
								<div className="prd-info-top">
									<div className="prd-rating">
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
									</div>
								</div>
								<div className="prd-rating justify-content-center">
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
								</div>
								<div className="prd-tag">
									<a href="/">Seiko</a>
								</div>
								<h2 className="prd-title">
									<a href="product.html">Oversize Cotton Dress</a>
								</h2>
								<div className="prd-description">
									Quisque volutpat condimentum velit. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos
									himenaeos. Nam nec ante sed lacinia.
								</div>
								<div className="prd-action">
									<form action="#">
										<button
											className="btn js-prd-addtocart"
											data-product='{"name": "Oversize Cotton Dress", "path":"images/skins/fashion/products/product-02-1.webp", "url":"product.html", "aspect_ratio":0.778}'
										>
											Add To Cart
										</button>
									</form>
								</div>
							</div>
							<div className="prd-hovers">
								<div className="prd-circle-labels">
									<div>
										<a
											href="/"
											className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
											title="Add To Wishlist"
										>
											<i className="icon-heart-stroke"></i>
										</a>
										<a
											href="/"
											className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
											title="Remove From Wishlist"
										>
											<i className="icon-heart-hover"></i>
										</a>
									</div>
									<div className="prd-hide-mobile">
										<a
											href="/"
											className="circle-label-qview js-prd-quickview"
											data-src="ajax/ajax-quickview.html"
										>
											<i className="icon-eye"></i>
											<span>QUICK VIEW</span>
										</a>
									</div>
								</div>
								<div className="prd-price">
									<div className="price-new">$ 180</div>
								</div>
								<div className="prd-action">
									<div className="prd-action-left">
										<form action="#">
											<button
												className="btn js-prd-addtocart"
												data-product='{"name": "Oversize Cotton Dress", "path":"images/skins/fashion/products/product-02-1.webp", "url":"product.html", "aspect_ratio":0.778}'
											>
												Add To Cart
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					onMouseEnter={() => mouseEnter(1)}
					onMouseLeave={() => mouseLeave(1)}
					className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-xl ${
						hoverstate[1] ? 'hovered' : ''
					}`}
				>
					<div className="prd-inside">
						<div className="prd-img-area">
							<a
								href="product.html"
								className="prd-img image-hover-scale image-container"
								style={{ paddingBottom: '128.48%' }}
							>
								<img
									src="images/skins/fashion/products/product-03-1.webp"
									data-src="images/skins/fashion/products/product-03-1.webp"
									alt="Oversized Cotton Blouse"
									className="js-prd-img fade-up lazyloaded"
								/>
								<div className="generic-loader"></div>
								<div className="prd-big-squared-labels">
									<div className="label-new">
										<span>New</span>
									</div>
									<div className="label-sale">
										<span>
											-10% <span className="sale-text">Sale</span>
										</span>
										<div className="countdown-circle">
											<div
												className="countdown js-countdown"
												data-countdown="2021/07/01"
											>
												<span>
													<span>39</span>DAYS
												</span>
												<span>
													<span>04</span>HRS
												</span>
												<span>
													<span>42</span>MIN
												</span>
												<span>
													<span>43</span>SEC
												</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<div className="prd-circle-labels">
								<a
									href="#"
									className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
									title="Add To Wishlist"
								>
									<i className="icon-heart-stroke"></i>
								</a>
								<a
									href="#"
									className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
									title="Remove From Wishlist"
								>
									<i className="icon-heart-hover"></i>
								</a>
								<a
									href="#"
									className="circle-label-qview js-prd-quickview prd-hide-mobile"
									data-src="ajax/ajax-quickview.html"
								>
									<i className="icon-eye"></i>
									<span>QUICK VIEW</span>
								</a>
							</div>
							<ul className="list-options color-swatch">
								<li
									data-image="images/skins/fashion/products/product-03-1.webp"
									className="active"
								>
									<a
										href="#"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-03-1.webp"
											data-src="images/skins/fashion/products/product-03-1.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-03-2.webp">
									<a
										href="#"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-03-2.webp"
											data-src="images/skins/fashion/products/product-03-2.webp"
											className="fade-up lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-03-3.webp">
									<a
										href="#"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-03-3.webp"
											data-src="images/skins/fashion/products/product-03-3.webp"
											className="fade-up lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className="prd-info">
							<div className="prd-info-wrap">
								<div className="prd-info-top">
									<div className="prd-rating">
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
									</div>
								</div>
								<div className="prd-rating justify-content-center">
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
								</div>
								<div className="prd-tag">
									<a href="#">Banita</a>
								</div>
								<h2 className="prd-title">
									<a href="product.html">Oversized Cotton Blouse</a>
								</h2>
								<div className="prd-description">
									Quisque volutpat condimentum velit. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos
									himenaeos. Nam nec ante sed lacinia.
								</div>
								<div className="prd-action">
									<form action="#">
										<button
											className="btn js-prd-addtocart"
											data-product='{"name": "Oversized Cotton Blouse", "path":"images/skins/fashion/products/product-03-1.webp", "url":"product.html", "aspect_ratio":0.778}'
										>
											Add To Cart
										</button>
									</form>
								</div>
							</div>
							<div className="prd-hovers">
								<div className="prd-circle-labels">
									<div>
										<a
											href="#"
											className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
											title="Add To Wishlist"
										>
											<i className="icon-heart-stroke"></i>
										</a>
										<a
											href="#"
											className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
											title="Remove From Wishlist"
										>
											<i className="icon-heart-hover"></i>
										</a>
									</div>
									<div className="prd-hide-mobile">
										<a
											href="#"
											className="circle-label-qview js-prd-quickview"
											data-src="ajax/ajax-quickview.html"
										>
											<i className="icon-eye"></i>
											<span>QUICK VIEW</span>
										</a>
									</div>
								</div>
								<div className="prd-price">
									<div className="price-old">$ 200</div>
									<div className="price-new">$ 180</div>
								</div>
								<div className="prd-action">
									<div className="prd-action-left">
										<form action="#">
											<button
												className="btn js-prd-addtocart"
												data-product='{"name": "Oversized Cotton Blouse", "path":"images/skins/fashion/products/product-03-1.webp", "url":"product.html", "aspect_ratio":0.778}'
											>
												Add To Cart
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					onMouseEnter={() => mouseEnter(2)}
					onMouseLeave={() => mouseLeave(2)}
					className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-xl ${
						hoverstate[2] ? 'hovered' : ''
					}`}
				>
					<div className="prd-inside">
						<div className="prd-img-area">
							<a
								href="product.html"
								className="prd-img image-hover-scale image-container"
								style={{ paddingBottom: '128.48%' }}
							>
								<img
									src="images/skins/fashion/products/product-03-1.webp"
									data-src="images/skins/fashion/products/product-03-1.webp"
									alt="Oversized Cotton Blouse"
									className="js-prd-img fade-up lazyloaded"
								/>
								<div className="generic-loader"></div>
								<div className="prd-big-squared-labels">
									<div className="label-new">
										<span>New</span>
									</div>
									<div className="label-sale">
										<span>
											-10% <span className="sale-text">Sale</span>
										</span>
										<div className="countdown-circle">
											<div
												className="countdown js-countdown"
												data-countdown="2021/07/01"
											>
												<span>
													<span>39</span>DAYS
												</span>
												<span>
													<span>04</span>HRS
												</span>
												<span>
													<span>42</span>MIN
												</span>
												<span>
													<span>43</span>SEC
												</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<div className="prd-circle-labels">
								<a
									href="#"
									className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
									title="Add To Wishlist"
								>
									<i className="icon-heart-stroke"></i>
								</a>
								<a
									href="#"
									className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
									title="Remove From Wishlist"
								>
									<i className="icon-heart-hover"></i>
								</a>
								<a
									href="#"
									className="circle-label-qview js-prd-quickview prd-hide-mobile"
									data-src="ajax/ajax-quickview.html"
								>
									<i className="icon-eye"></i>
									<span>QUICK VIEW</span>
								</a>
							</div>
							<ul className="list-options color-swatch">
								<li
									data-image="images/skins/fashion/products/product-03-1.webp"
									className="active"
								>
									<a
										href="#"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-03-1.webp"
											data-src="images/skins/fashion/products/product-03-1.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-03-2.webp">
									<a
										href="#"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-03-2.webp"
											data-src="images/skins/fashion/products/product-03-2.webp"
											className="fade-up lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-03-3.webp">
									<a
										href="#"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-03-3.webp"
											data-src="images/skins/fashion/products/product-03-3.webp"
											className="fade-up lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className="prd-info">
							<div className="prd-info-wrap">
								<div className="prd-info-top">
									<div className="prd-rating">
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
									</div>
								</div>
								<div className="prd-rating justify-content-center">
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
								</div>
								<div className="prd-tag">
									<a href="#">Banita</a>
								</div>
								<h2 className="prd-title">
									<a href="product.html">Oversized Cotton Blouse</a>
								</h2>
								<div className="prd-description">
									Quisque volutpat condimentum velit. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos
									himenaeos. Nam nec ante sed lacinia.
								</div>
								<div className="prd-action">
									<form action="#">
										<button
											className="btn js-prd-addtocart"
											data-product='{"name": "Oversized Cotton Blouse", "path":"images/skins/fashion/products/product-03-1.webp", "url":"product.html", "aspect_ratio":0.778}'
										>
											Add To Cart
										</button>
									</form>
								</div>
							</div>
							<div className="prd-hovers">
								<div className="prd-circle-labels">
									<div>
										<a
											href="#"
											className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
											title="Add To Wishlist"
										>
											<i className="icon-heart-stroke"></i>
										</a>
										<a
											href="#"
											className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
											title="Remove From Wishlist"
										>
											<i className="icon-heart-hover"></i>
										</a>
									</div>
									<div className="prd-hide-mobile">
										<a
											href="#"
											className="circle-label-qview js-prd-quickview"
											data-src="ajax/ajax-quickview.html"
										>
											<i className="icon-eye"></i>
											<span>QUICK VIEW</span>
										</a>
									</div>
								</div>
								<div className="prd-price">
									<div className="price-old">$ 200</div>
									<div className="price-new">$ 180</div>
								</div>
								<div className="prd-action">
									<div className="prd-action-left">
										<form action="#">
											<button
												className="btn js-prd-addtocart"
												data-product='{"name": "Oversized Cotton Blouse", "path":"images/skins/fashion/products/product-03-1.webp", "url":"product.html", "aspect_ratio":0.778}'
											>
												Add To Cart
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					onMouseEnter={() => mouseEnter(3)}
					onMouseLeave={() => mouseLeave(3)}
					className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-xl ${
						hoverstate[3] ? 'hovered' : ''
					}`}
				>
					<div className="prd-inside">
						<div className="prd-img-area">
							<a
								href="product.html"
								className="prd-img image-hover-scale image-container"
								style={{ paddingBottom: '128.48%' }}
							>
								<img
									src="images/skins/fashion/products/product-02-1.webp"
									data-src="images/skins/fashion/products/product-02-1.webp"
									alt="Oversize Cotton Dress"
									className="js-prd-img fade-up ls-is-cached lazyloaded"
								/>
								<div className="generic-loader"></div>
								<div className="prd-big-squared-labels"></div>
							</a>
							<div className="prd-circle-labels">
								<a
									href="/"
									className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
									title="Add To Wishlist"
								>
									<i className="icon-heart-stroke"></i>
								</a>
								<a
									href="/"
									className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
									title="Remove From Wishlist"
								>
									<i className="icon-heart-hover"></i>
								</a>
								<a
									href="/"
									className="circle-label-qview js-prd-quickview prd-hide-mobile"
									data-src="ajax/ajax-quickview.html"
								>
									<i className="icon-eye"></i>
									<span>QUICK VIEW</span>
								</a>
								<div className="colorswatch-label colorswatch-label--variants js-prd-colorswatch">
									<i className="icon-palette">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
										<span className="path4"></span>
										<span className="path5"></span>
										<span className="path6"></span>
										<span className="path7"></span>
										<span className="path8"></span>
										<span className="path9"></span>
										<span className="path10"></span>
									</i>
									<ul>
										<li data-image="images/skins/fashion/products/product-02-1.webp">
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title=""
												data-original-title="Color Name"
											>
												<img
													src="images/colorswatch/color-orange.webp"
													alt=""
												/>
											</a>
										</li>
										<li data-image="images/skins/fashion/products/product-02-color-2.webp">
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title=""
												data-original-title="Color Name"
											>
												<img src="images/colorswatch/color-red.webp" alt="" />
											</a>
										</li>
										<li data-image="images/skins/fashion/products/product-02-color-3.webp">
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title=""
												data-original-title="Color Name"
											>
												<img
													src="images/colorswatch/color-yellow.webp"
													alt=""
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<ul className="list-options color-swatch">
								<li
									data-image="images/skins/fashion/products/product-02-1.webp"
									className="active"
								>
									<a
										href="/"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-02-1.webp"
											data-src="images/skins/fashion/products/product-02-1.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-02-2.webp">
									<a
										href="/"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-02-2.webp"
											data-src="images/skins/fashion/products/product-02-2.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
								<li data-image="images/skins/fashion/products/product-02-3.webp">
									<a
										href="/"
										className="js-color-toggle"
										data-toggle="tooltip"
										data-placement="right"
										title=""
										data-original-title="Color Name"
									>
										<img
											src="images/skins/fashion/products/product-02-3.webp"
											data-src="images/skins/fashion/products/product-02-3.webp"
											className="fade-up ls-is-cached lazyloaded"
											alt="Color Name"
										/>
									</a>
								</li>
							</ul>
						</div>
						<div className="prd-info">
							<div className="prd-info-wrap">
								<div className="prd-info-top">
									<div className="prd-rating">
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
										<i className="icon-star-fill fill"></i>
									</div>
								</div>
								<div className="prd-rating justify-content-center">
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
									<i className="icon-star-fill fill"></i>
								</div>
								<div className="prd-tag">
									<a href="/">Seiko</a>
								</div>
								<h2 className="prd-title">
									<a href="product.html">Oversize Cotton Dress</a>
								</h2>
								<div className="prd-description">
									Quisque volutpat condimentum velit. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos
									himenaeos. Nam nec ante sed lacinia.
								</div>
								<div className="prd-action">
									<form action="#">
										<button
											className="btn js-prd-addtocart"
											data-product='{"name": "Oversize Cotton Dress", "path":"images/skins/fashion/products/product-02-1.webp", "url":"product.html", "aspect_ratio":0.778}'
										>
											Add To Cart
										</button>
									</form>
								</div>
							</div>
							<div className="prd-hovers">
								<div className="prd-circle-labels">
									<div>
										<a
											href="/"
											className="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
											title="Add To Wishlist"
										>
											<i className="icon-heart-stroke"></i>
										</a>
										<a
											href="/"
											className="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
											title="Remove From Wishlist"
										>
											<i className="icon-heart-hover"></i>
										</a>
									</div>
									<div className="prd-hide-mobile">
										<a
											href="/"
											className="circle-label-qview js-prd-quickview"
											data-src="ajax/ajax-quickview.html"
										>
											<i className="icon-eye"></i>
											<span>QUICK VIEW</span>
										</a>
									</div>
								</div>
								<div className="prd-price">
									<div className="price-new">$ 180</div>
								</div>
								<div className="prd-action">
									<div className="prd-action-left">
										<form action="#">
											<button
												className="btn js-prd-addtocart"
												data-product='{"name": "Oversize Cotton Dress", "path":"images/skins/fashion/products/product-02-1.webp", "url":"product.html", "aspect_ratio":0.778}'
											>
												Add To Cart
											</button>
										</form>
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
