import React from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import LatestProduct from '../components/LatestProduct';
import NewArrival from '../components/NewArrival';
import TrendingNow from '../components/TrendingNow';
import CollectionSection from '../components/CollectionSection';
import BrandsName from '../components/BrandsName';
import CategoryTopBottomSection from '../components/CategoryTopBottomSection';


function Home() {
	return (
		<div>
			<NavBar />
			<Slider />
			<div className="holder holder-mt-xsmall">
				<div className="container">
					<CategoryTopBottomSection />
				</div>
			</div>
			<BrandsName />
			<CollectionSection />
			<TrendingNow />
			<div className="holder holder-mt-xsmall">
				<NewArrival />
			</div>
			<LatestProduct />
			<Footer />
		</div>
	);
}

export default Home;
