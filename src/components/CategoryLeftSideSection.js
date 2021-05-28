import React from 'react';

function CategoryLeftSideSection() {
	return (
		<div className="col-lg-4">
			<div
				className="aside filter-col
               filter-mobile-col filter-col--sticky js-filter-col filter-col--opened-desktop"
				data-grid-tab-content
			>
				<div className="filter-col-content filter-mobile-content">
					<div className="sidebar-block">
						<div className="sidebar-block_title">
							<span>Current selection</span>
						</div>
						<div className="sidebar-block_content">
							<div className="selected-filters-wrap">
								<ul className="selected-filters">
									<li>
										<a href="/">Grey</a>
									</li>
									<li>
										<a href="/">Men</a>
									</li>
									<li>
										<a href="/">Above $200</a>
									</li>
								</ul>
								<div className="d-flex flex-wrap align-items-center">
									<a href="/" className="clear-filters">
										<span>Clear All</span>
									</a>
									<div className="selected-filters-count ml-auto d-none d-lg-block">
										Selected
										<span>6 items</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="sidebar-block d-filter-mobile">
						<h3 className="mb-1">SORT BY</h3>
						<div className="select-wrapper select-wrapper-xs">
							<select className="form-control">
								<option value="featured">Featured</option>
								<option value="rating">Rating</option>
								<option value="price">Price</option>
							</select>
						</div>
					</div>
					<div className="sidebar-block filter-group-block open">
						<div className="sidebar-block_title">
							<span>Categories</span>
							<span className="toggle-arrow">
								<span />
								<span />
							</span>
						</div>
						<div className="sidebar-block_content">
							<ul className="category-list">
								<li className="active">
									<a href="category.html" title="Casual" className="open">
										Casual&nbsp;
										<span>(30)</span>
									</a>
									<div className="toggle-category js-toggle-category">
										<span>
											<i className="icon-angle-down" />
										</span>
									</div>
									<ul className="category-list category-list">
										<li>
											<a href="category.html" title="Men">
												Men&nbsp;
												<span>(10)</span>
											</a>
										</li>
										<li>
											<a href="category.html" title="Women">
												Women&nbsp;
												<span>(10)</span>
											</a>
										</li>
										<li>
											<a href="category.html" title="Accessories">
												Accessories&nbsp;
												<span>(10)</span>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="category.html" title="T-Shirts" className="open">
										T-Shirts
									</a>
								</li>
								<li>
									<a href="category.html" title="Medical" className="open">
										Medical
									</a>
								</li>
								<li>
									<a href="category.html" title="FoodMarket" className="open">
										FoodMarket
									</a>
								</li>
								<li>
									<a href="category.html" title="Bikes" className="open">
										Bikes&nbsp;
										<span>(12)</span>
									</a>
								</li>
								<li>
									<a href="category.html" title="Cosmetics" className="open">
										Cosmetics&nbsp;
										<span>(16)</span>
									</a>
								</li>
								<li>
									<a href="category.html" title="Fishing" className="open">
										Fishing&nbsp;
										<span>(20)</span>
									</a>
								</li>
								<li>
									<a href="category.html" title="Electronics" className="open">
										Electronics&nbsp;
										<span>(15)</span>
									</a>
								</li>
								<li>
									<a href="category.html" title="Games" className="open">
										Games&nbsp;
										<span>(14)</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar-block filter-group-block collapsed">
						<div className="sidebar-block_title">
							<span>Colors</span>
							<span className="toggle-arrow">
								<span />
								<span />
							</span>
						</div>
						<div className="sidebar-block_content">
							<ul className="color-list two-column">
								<li className="active">
									<a href="/" data-tooltip="Dark Red" title="Dark Red">
										<span className="value">
											<img src="images/colorswatch/color-red.webp" alt="" />
										</span>
										<span className="colorname">Red (87)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Pink" title="Pink">
										<span className="value">
											<img src="images/colorswatch/color-pink.webp" alt="" />
										</span>
										<span className="colorname">Pink (95)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Violet" title="Violet">
										<span className="value">
											<img src="images/colorswatch/color-violet.webp" alt="" />
										</span>
										<span className="colorname">Violet (18)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Blue" title="Blue">
										<span className="value">
											<img src="images/colorswatch/color-blue.webp" alt="" />
										</span>
										<span className="colorname">Blue (78)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Marine" title="Marine">
										<span className="value">
											<img src="images/colorswatch/color-marine.webp" alt="" />
										</span>
										<span className="colorname">Marine (45)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Orange" title="Orange">
										<span className="value">
											<img src="images/colorswatch/color-orange.webp" alt="" />
										</span>
										<span className="colorname">Orange (96)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Yellow" title="Yellow">
										<span className="value">
											<img src="images/colorswatch/color-yellow.webp" alt="" />
										</span>
										<span className="colorname">Yellow (55)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Dark Yellow" title="Dark Yellow">
										<span className="value">
											<img
												src="images/colorswatch/color-darkyellow.webp"
												alt=""
											/>
										</span>
										<span className="colorname">Dark Yellow (2)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="Black" title="Black">
										<span className="value">
											<img src="images/colorswatch/color-black.webp" alt="" />
										</span>
										<span className="colorname">Black (15)</span>
									</a>
								</li>
								<li>
									<a href="/" data-tooltip="White" title="White">
										<span className="value">
											<img src="images/colorswatch/color-white.webp" alt="" />
										</span>
										<span className="colorname">White (58)</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar-block filter-group-block collapsed">
						<div className="sidebar-block_title">
							<span>Size</span>
							<span className="toggle-arrow">
								<span />
								<span />
							</span>
						</div>
						<div className="sidebar-block_content">
							<ul
								className="category-list two-column size-list"
								data-sort='["XXS","XS","S","M","L","XL","XXL","XXXL"]'
							>
								<li data-value="L" className="active">
									<a href="/">L</a>
								</li>
								<li data-value="XL">
									<a href="/">XL</a>
								</li>
								<li data-value="XXS">
									<a href="/">XXS</a>
								</li>
								<li data-value="XS">
									<a href="/">XS</a>
								</li>
								<li data-value="S">
									<a href="/">S</a>
								</li>
								<li data-value="XXL">
									<a href="/">XXL</a>
								</li>
								<li data-value="XXXL">
									<a href="/">XXXL</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar-block filter-group-block collapsed">
						<div className="sidebar-block_title">
							<span>Brands</span>
							<span className="toggle-arrow">
								<span />
								<span />
							</span>
						</div>
						<div className="sidebar-block_content">
							<ul className="category-list">
								<li>
									<a href="/">Adidas</a>
								</li>
								<li>
									<a href="/">Nike</a>
								</li>
								<li className="active">
									<a href="/">Reebok</a>
								</li>
								<li>
									<a href="/">Ralph Lauren</a>
								</li>
								<li>
									<a href="/">Delpozo</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar-block filter-group-block collapsed">
						<div className="sidebar-block_title">
							<span>Price</span>
							<span className="toggle-arrow">
								<span />
								<span />
							</span>
						</div>
						<div className="sidebar-block_content">
							<ul className="category-list">
								<li>
									<a href="/">$100-$200</a>
								</li>
								<li className="active">
									<a href="/">Above $200</a>
								</li>
								<li>
									<a href="/">Under $100</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidebar-block filter-group-block collapsed">
						<div className="sidebar-block_title">
							<span>Popular tags</span>
							<span className="toggle-arrow">
								<span />
								<span />
							</span>
						</div>
						<div className="sidebar-block_content">
							<ul className="tags-list">
								<li className="active">
									<a href="/">Jeans</a>
								</li>
								<li>
									<a href="/">St.Valentine’s gift</a>
								</li>
								<li>
									<a href="/">Sunglasses</a>
								</li>
								<li>
									<a href="/">Discount</a>
								</li>
								<li>
									<a href="/">Maxi dress</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="filter-toggle js-filter-toggle">
				<div className="loader-horizontal js-loader-horizontal">
					<div className="progress">
						<div
							className="progress-bar progress-bar-striped progress-bar-animated"
							style={{ width: '100%' }}
						/>
					</div>
				</div>
				<span className="filter-toggle-icons js-filter-btn">
					<i className="icon-filter" />
					<i className="icon-filter-close" />
				</span>
				<span className="filter-toggle-text">
					<a href="/" className="filter-btn-open js-filter-btn">
						REFINE & SORT
					</a>
					<a href="/" className="filter-btn-close js-filter-btn">
						RESET
					</a>
					<a href="/" className="filter-btn-apply js-filter-btn">
						APPLY & CLOSE
					</a>
				</span>
			</div>
		</div>
	);
}

export default CategoryLeftSideSection;
