import React, { useEffect, useState } from 'react';
import Product from './Product';
import {API_URL} from './../utils/constants'


export default function CategoryRightSideSection() {

	const [products, setproducts] = useState([]);
	const page = 1;
	const size = 6;

	useEffect(() => {
		
		fetch(`${API_URL}/products?limit=${size}&skip=${page*size-size}`)
			.then((res) => res.json())
			.then((data) => {
				setproducts(data.products);
			})
			.catch((e) => console.log(e));

	}, []);

	return (
		<div className="col-lg aside">
			<div className="filter-row">
				<div className="row">
					<div className="items-count">35 item(s)</div>
					<div className="select-wrap d-none d-md-flex">
						<div className="select-label">SORT:</div>
						<div className="select-wrapper select-wrapper-xxs">
							<select className="form-control input-sm">
								<option value="featured">Featured</option>
								<option value="rating">Rating</option>
								<option value="price">Price</option>
							</select>
						</div>
					</div>
					<div className="select-wrap d-none d-md-flex">
						<div className="select-label">VIEW:</div>
						<div className="select-wrapper select-wrapper-xxs">
							<select className="form-control input-sm">
								<option value="featured">12</option>
								<option value="rating">36</option>
								<option value="price">100</option>
							</select>
						</div>
					</div>
					<div className="viewmode-wrap">
						<div className="view-mode">
							<span className="js-horview d-none d-lg-inline-flex">
								<i className="icon-grid" />
							</span>
							<span className="js-gridview active">
								<i className="icon-grid" />
							</span>
							<span className="js-listview">
								<i className="icon-list" />
							</span>
						</div>
					</div>
				</div>
			</div>

			<div
				className="prd-grid product-listing data-to-show-3 data-to-show-md-3 data-to-show-sm-2 js-category-grid"
				data-grid-tab-content=""
			>
				{products.map(product => <Product key={'prod'+product.id} {...product} />)}
			</div>
		</div>
	);
}
