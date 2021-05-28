import React from 'react';

function LatestProduct() {
	return (
		<div className="holder holder-mt-medium">
			<div className="container">
				<div className="title-wrap text-center ">
					<h2 className="h1-style text-center">
						<a href="blog.html" title="View all">
							Latest From Blog
						</a>
					</h2>
					<div
						className="carousel-arrows"
						style={{ margin: '0 auto 65px', width: '50px' }}
					></div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<a
							href="blog-post.html"
							className="post-prw-img image-hover-scale image-container"
							style={{ paddingBottom: '54.44%' }}
						>
							<img
								className="w-100"
								alt="The High-Street Brand Fashion"
								src="images/skins/fashion/blog/blog-fashion-04.webp"
							/>
						</a>
						<h4 className="post-prw-title text-center">
							<a href="blog-post.html">Working From Home</a>
						</h4>
						<div className="post-prw-links justify-content-center">
							<div className="post-prw-date">
								<i className="icon-calendar1"></i>
								June 1, 2020
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<a
							href="blog-post.html"
							className="post-prw-img image-hover-scale image-container"
							style={{ paddingBottom: '54.44%' }}
						>
							<img
								className="w-100"
								alt="The High-Street Brand Fashion"
								src="images/skins/fashion/blog/blog-fashion-03.webp"
							/>
						</a>
						<h4 className="post-prw-title text-center">
							<a href="blog-post.html">Working From Home</a>
						</h4>
						<div className="post-prw-links justify-content-center">
							<div className="post-prw-date">
								<i className="icon-calendar1"></i>
								June 1, 2020
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<a
							href="blog-post.html"
							className="post-prw-img image-hover-scale image-container"
							style={{ paddingBottom: '54.44%' }}
						>
							<img
								className="w-100"
								alt="The High-Street Brand Fashion"
								src="images/skins/fashion/blog/blog-fashion-02.webp"
							/>
						</a>
						<h4 className="post-prw-title text-center">
							<a href="blog-post.html">Working From Home</a>
						</h4>
						<div className="post-prw-links justify-content-center">
							<div className="post-prw-date">
								<i className="icon-calendar1"></i>
								June 1, 2020
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LatestProduct;
