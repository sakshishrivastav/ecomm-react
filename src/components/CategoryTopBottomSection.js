import React from 'react';

function CategoryTopBottomSection() {
	return (
		<div className="row vert-margin-small">
			<div className="col-sm">
				<a
					href="category.html"
					className="collection-grid-3-item image-hover-scale"
				>
					<div
						className="collection-grid-3-item-img image-container"
						style={{ paddingBottom: '68.22%' }}
					>
						<img
							src="images/skins/fashion/banner-category-01.webp"
							data-src="images/skins/fashion/banner-category-01.webp"
							className="fade-up ls-is-cached lazyloaded"
							alt="Banner"
						/>
					</div>
					<div className="collection-grid-3-caption-bg">
						<h3 className="collection-grid-3-title">Top</h3>
						<h4 className="collection-grid-3-subtitle">
								The&nbsp;Best&nbsp;Look&nbsp;
						</h4>
					</div>
				</a>
			</div>
			<div className="col-sm">
				<a
					href="category.html"
					className="collection-grid-3-item image-hover-scale"
				>
					<div
						className="collection-grid-3-item-img image-container"
						style={{ paddingBottom: '68.22%' }}
					>
						<img
							src="images/skins/fashion/banner-category-02.webp"
							data-src="images/skins/fashion/banner-category-02.webp"
							className="fade-up ls-is-cached lazyloaded"
							alt="Banner"
						/>
					</div>
					<div className="collection-grid-3-caption-bg">
						<h3 className="collection-grid-3-title">Bottom</h3>
						<h4 className="collection-grid-3-subtitle">
								Live&nbsp;for&nbsp;Fashion
						</h4>
					</div>
				</a>
			</div>
		</div>
	);
}

export default CategoryTopBottomSection;
