import React from 'react';

function BrandsName() {
	return (
		<div className="container mt-5">
			<ul className="brand-grid flex-wrap justify-content- js-color-hover-brand-grid">
				<li>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-01.webp"
							data-src="images/skins/fashion/brands/brand-fashion-01.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-02.webp"
							data-src="images/skins/fashion/brands/brand-fashion-02.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-03.webp"
							data-src="images/skins/fashion/brands/brand-fashion-03.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-04.webp"
							data-src="images/skins/fashion/brands/brand-fashion-04.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-05.webp"
							data-src="images/skins/fashion/brands/brand-fashion-05.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-06.webp"
							data-src="images/skins/fashion/brands/brand-fashion-06.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li className="js-hidden" style={{ display: 'none' }}>
					<a
						href="#"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-03.webp"
							data-src="images/skins/fashion/brands/brand-fashion-03.webp"
							alt="Brand"
						/>
					</a>
				</li>
				<li className="js-hidden" style={{ display: 'none' }}>
					<a
						href="/"
						target="_self"
						className="d-block image-container"
						title="Brand"
					>
						<img
							className="fade-up lazyloaded"
							src="images/skins/fashion/brands/brand-fashion-04.webp"
							data-src="images/skins/fashion/brands/brand-fashion-04.webp"
							alt="Brand"
						/>
					</a>
				</li>
			</ul>
			<div className="text-center mt-3 d-md-none">
				<a
					href="/"
					className="btn btn--grey brands-show-more js-brands-show-more is-init"
				>
					<span>Show More</span>
					<span>Show Less</span>
				</a>
			</div>
		</div>
	);
}

export default BrandsName;
