const Footer = () => {
	const footerMenu = [
		{
			id: 1,
			title: "Our Products",
			list: "App",
		},
		{
			id: 2,
			title: "Our Products",
			list: "Analytics",
		},

		{
			id: 3,
			title: "Our Products",
			list: "Token List",
		},

		{
			id: 4,
			title: "Our Products",
			list: "Defi",
		},
	];

	const socialMedia = [
		{
			id: 1,
			link: "facebook",
			url: "https://www.facebook.com/",
		},

		{
			id: 2,
			link: "twitter",
			url: "https://twitter.com/home",
		},

		{
			id: 3,
			link: "Instagram",
			url: "https://www.instagram.com/",
		},

		{
			id: 4,
			link: "email",
			url: "https://mail.google.com/",
		},
	];

	return (
		<div className="bg-black text-white text-center py-16 mx-auto md:ml-72">
			<div className="max-w-[1240px] mx-auto  grid grid-cols-2 lg:grid-cols-5 text-center md:ml-20">
				<div>
					<h3 className="font-bold text-xl border-b-4 border-[#00d8ff] inline-block mb-2">
						Our Products
					</h3>
					{footerMenu.map(({ id, list }) => {
						return (
							<div>
								<ul>
									<li className="cursor-pointer hover:text-[#00acc1]" key={id}>
										{list}
									</li>
								</ul>
							</div>
						);
					})}
				</div>

				<div className="mx-auto">
					<h3 className="font-bold text-xl border-b-4 border-[#00d8ff] inline-block mb-2">
						Contact Us
					</h3>

					{socialMedia.map(({ id, link, url }) => {
						return (
							<div>
								<ul>
									<li key={id}>
										<a
											className="cursor-pointer hover:text-[#00acc1]"
											href={url}>
											{link}
										</a>
									</li>
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Footer;
