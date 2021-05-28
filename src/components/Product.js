/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

function Product(props) {

	const ref = useRef();

	const mouseEnter = () => {
		ref.current.classList.add('hovered');
	};

	const mouseOut = () => {
		ref.current.classList.remove('hovered');
	};


	return (
		<div
			ref={ref}
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseOut}
			className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-xl ${
				props.outOfStock ? 'prd-outstock' : ''
			}`}
		>
			<div className="prd-inside">
				<div className="prd-img-area">
					<a
						href="products/"
						className="prd-img image-hover-scale image-container"
						style={{ paddingBottom: '128.48%' }}
					>
						<img
							src={props.images[props.primary_image]}
							alt={props.name}
							className="js-prd-img fade-up ls-is-cached lazyloaded"
						/>
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
						{props.colors.length ? (
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
									{props.colors.map((c) => (
										<li
											key={props.id + c}
											data-image="images/skins/fashion/products/product-02-1.webp"
										>
											<a
												className="js-color-toggle"
												data-toggle="tooltip"
												data-placement="left"
												title={c}
											>
												<img
													src={`images/colorswatch/color-${c}.webp`}
													alt=""
												/>
											</a>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
					<ul className="list-options color-swatch">
						{props.images.map((img, i) => (
							<li
								key={'sub' + props.id + i}
								className={i === parseInt(props.primary_image) ? 'active' : ''}
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
										src={img}
										className="fade-up ls-is-cached lazyloaded"
										alt="Image Name"
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="prd-info">
					<div className="prd-info-wrap">
						<div className="prd-info-top"></div>
						<div className="prd-rating justify-content-center">
							<i className="icon-star-fill fill"></i>
							<i className="icon-star-fill fill"></i>
							<i className="icon-star-fill fill"></i>
							<i className="icon-star-fill"></i>
							<i className="icon-star-fill"></i>
						</div>
						<div className="prd-tag">
							<a href="/">{props.brand}</a>
						</div>
						<h2 className="prd-title">
							<a href="product.html">{props.name}</a>
						</h2>
						<div className="prd-description">
							Quisque volutpat condimentum velit. Class aptent taciti sociosqu
							ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
							nec ante sed lacinia.
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
							<div className="price-new">$ {props.price.usd}</div>
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
	);
}

export default Product;





































// For multiple refs
// const elementrefs = useRef([]);
// const handle = i => {
// 	elementrefs.current[i].classList.add('otherclass');
// };
// <div ref={(el) => (elementrefs.current[0] = el)} onClick={() => handle(0)} className="myclass"></div>;
