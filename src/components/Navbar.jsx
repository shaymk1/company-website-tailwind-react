import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const linkTags = [
		{
			id: 1,
			link: "Developers",
		},

		{
			id: 2,
			link: "Platform",
		},

		{
			id: 3,
			link: "About",
		},

		{
			id: 3,
			link: "Use Defi",
		},

		{
			id: 3,
			link: "Community",
		},
	];

	// const handleClick = () => {
	// 	setNav(!nav);
	// };
	return (
		<header>
			{/*container-all*/}

			<div className="h-[90px]  w-full ">
				{/*container-left-side*/}
				<div className="max-w-[1240px] mx-auto uppercase font-extrabold flex justify-between text-white">
					{/*logo*/}
					<div className="text-[#00acc1] ">
						<h1>defi.</h1>
					</div>

					{/*container-right-side*/}
					<div className="  ">
						{linkTags.map(({ id, link }) => {
							return (
								<ul className="">
									<li key={id}>
										<a className="" href={`/#${link}`}>
											{link}
										</a>
									</li>
								</ul>
							);
						})}
					</div>
				</div>

				{/*mobile-links*/}
			</div>
		</header>
	);
};

export default Navbar;
