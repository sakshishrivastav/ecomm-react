import React from 'react';

function AccountDetail() {
	return (
		<div className="col-md-14 aside">
			<h1 className="mb-3">Account Details</h1>
			<div className="row vert-margin">
				<div className="col-sm-9">
					<div className="card">
						<div className="card-body">
							<h3>Personal Info</h3>
							<p>
								<b>First Name:</b>
                Jenny
								<br />
								<b>Last Name:</b>
                Raider
								<br />
								<b>E-mail:</b>
                jennyraider@hotmail.com
								<br />
								<b>Phone:</b>
                876-432-4323
							</p>
							<div className="mt-2 clearfix">
								<a
									href="/"
									className="link-icn js-show-form"
									data-form="/updateDetails"
								>
									<i className="icon-pencil" />
                  Edit
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default AccountDetail;
