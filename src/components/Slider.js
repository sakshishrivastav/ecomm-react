import React from 'react';
import './slider.css';

function Slider() {
	return (
		<div id="main-slider" className="position-relative">
			<div className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators align-items-center">
					<li data-slide-to="0" className="rounded-circle active" />
					<li data-slide-to="1" className="rounded-circle" />
					<li data-slide-to="2" className="rounded-circle" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active" data-interval="10000">
						<img
							src="/images/skins/fashion/slider/slide-fashion-02.webp"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<div className="position-absolute d-flex arrows justify-content-between">
					<button className="arrow-prev" aria-label="Previous" type="button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
							className="bi bi-chevron-left"
						>
							<path
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
						<span className="sr-only">Previous</span>
					</button>
					<button className="arrow-next" aria-label="Next" type="button">
						<span className="sr-only">Next</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Slider;
