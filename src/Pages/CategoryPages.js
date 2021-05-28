import React from 'react';
import CategoryLeftSideSection from '../components/CategoryLeftSideSection';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CategoryRightSideSection from '../components/CategoryRightSideSection';
import CategoryTopBottomSection from '../components/CategoryTopBottomSection';
function CategoryPages() {
	return (
		<div>
			<NavBar />
			<div className="holder breadcrumbs-wrap mt-0">
				<div className="container">
					<ul className="breadcrumbs">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<span>Category</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="holder holder-mt-xsmall">
				<div className="container">
					<CategoryTopBottomSection />
					<div className="page-title text-center">
						<br />
						<br />
						<h1>WOMEN’S</h1>
					</div>
					<div className="row">
						<CategoryLeftSideSection />
						<CategoryRightSideSection />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default CategoryPages;
