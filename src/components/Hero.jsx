import heroVid from "../assets/video.mp4";

const Hero = () => {
	return (
		<div className="w-full h-[90vh] top-[90px] ">
			{/* video*/}
			<video
				className="object-cover h-full w-full absolute"
				src={heroVid}
				autoPlay
				loop
				muted></video>
			{/* content*/}
			<div className="mx-auto">
				<h1>decentralized trading protocol</h1>
			</div>
		</div>
	);
};

export default Hero;
