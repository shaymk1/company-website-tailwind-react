import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
			link: "Features",
		},

		// {
		// 	id: 3,
		// 	link: "Use Defi",
		// },

		{
			id: 3,
			link: "Community",
		},
	];

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<header>
			{/*container-all*/}

			<div className="h-[90px]  w-full bg-black border-2 border-b-[#00acc1]">
				{/*container-left-side*/}
				<div className="max-w-[1240px] mx-auto uppercase font-extrabold flex justify-between text-white items-center h-full  ">
					{/*logo*/}
					<div className="text-[#00acc1] pl-4 ">
						<h1 className="  font-extrabold text-3xl">defi.</h1>
					</div>

					{/*container-right-side*/}
					<div className="hidden md:flex items-center pr-6 ">
						{linkTags.map(({ id, link }) => {
							return (
								<ul className=" ">
									<li key={id}>
										<a className="font-montserrat" href={`/#${link}`}>
											{link}
										</a>
									</li>
								</ul>
							);
						})}
						<button className="px-4 py-2 rounded-md hover:bg-indigo-500  bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] font-[kanit]">
							Use Defi
						</button>
					</div>

					{/*mobile-icons*/}
					<div
						onClick={handleNav}
						className="block md:hidden items-center  pr-4  cursor-pointer">
						{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
					</div>
					{/*mobile-menu*/}
					<div
						className={
							nav
								? "w-full absolute top-[90px] left-0  block justify-center text-center md:hidden bg-black"
								: "absolute left-[-100%]"
						}>
						{linkTags.map(({ id, link }) => {
							return (
								<ul className="py-2 ">
									<li key={id}>
										<a
											className="text-xl font-montserrat z-50"
											href={`/#${link}`}>
											{link}
										</a>
									</li>
								</ul>
							);
						})}
						<button className="px-4 py-2 rounded-md  mt-2  bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] font-[kanit] mb-2">
							Use Defi
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
