import React from 'react';

function CollectionSection() {
	return (
		<div className="container mt-5">
			<div className="title-wrap text-center">
				<h2 className="h1-style">Collections</h2>
				<div
					className="title-wrap title-tabs-wrap text-center js-title-tabs ps ps--theme_default"
					data-ps-id="253fedeb-ff80-d82d-b8b2-dce8a1bae3ba"
				>
					<div className="title-tabs">
						<h2 className="h3-style active">
							<a
								href="ajax/ajax-product-tab-01.json"
								data-total="8"
								data-loaded="4"
								data-grid-tab-title=""
							>
								<span className="title-tabs-text theme-font">Women</span>
							</a>
						</h2>
						<h2 className="h3-style">
							<a
								href="ajax/ajax-product-tab-02.json"
								data-total="8"
								data-loaded="4"
								data-grid-tab-title=""
							>
								<span className="title-tabs-text theme-font">Men</span>
							</a>
						</h2>
						<h2 className="h3-style">
							<a
								href="ajax/ajax-product-tab-03.json"
								data-total="8"
								data-loaded="4"
								data-grid-tab-title=""
							>
								<span className="title-tabs-text theme-font">Accessories</span>
							</a>
						</h2>
					</div>
					<div
						className="ps__scrollbar-x-rail"
						style={{ left: '0', width: '0' }}
					>
						<div
							className="ps__scrollbar-x"
							tabIndex="0"
							style={{ left: '0', width: '0' }}
						></div>
					</div>
					<div
						className="ps__scrollbar-y-rail"
						style={{ top: '0', right: '0' }}
					>
						<div
							className="ps__scrollbar-y"
							tabIndex="0"
							style={{ top: '0', right: '0' }}
						></div>
					</div>
				</div>
			</div>
			<div className="prd-grid-wrap">
				<div
					className="prd-grid data-to-show-4 data-to-show-md-3 data-to-show-sm-2 data-to-show-xs-2"
					data-grid-tab-content=""
				></div>
				<div
					className="loader-horizontal-sm js-loader-horizontal-sm d-none"
					data-loader-horizontal=""
					style={{opacity: '0'}}
				>
					<span></span>
				</div>
			</div>
		</div>
	);
}

export default CollectionSection;
