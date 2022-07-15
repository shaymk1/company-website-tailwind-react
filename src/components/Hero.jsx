import heroVid from "../assets/video.mp4";

const Hero = () => {
	return (
		<div className=" w-full  ">
			{/* video*/}
			<div>
				<video
					className="object-cover  w-full absolute -z-50"
					src={heroVid}
					autoPlay
					loop
					muted></video>
			</div>
			{/* content*/}
			<div className="w-full h-[90%] mx-auto  text-center text-white pt-20 mt-20 py-4">
			
				<h1 className="uppercase text-3xl mb-2">
				decentralized
					<span className="text-[#00acc1] uppercase font-[kanit] font-bold pb-2 mx-2">
						trading
					</span>{" "}
					protocol
				</h1>
				<p className="text-xs text-slate-100 pb-3  ">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, saepe!
					Doloribus ipsum provident minus nobis delectus aut
				</p>
				<div className="">
					<button className="px-4 py-2 rounded-md bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] font-[kanit] hover:bg-[#00d8ff]">
						Use Defi
					</button>
					<button className="px-4 py-2 rounded-md border-2 border-indigo-500 ml-2">
						FAQ
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
