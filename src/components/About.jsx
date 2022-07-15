

import Aboutcard from "./Aboutcard";
const About = () => {
  return (
		<div className="w-full text-center">
			<div className="max-w-[1240px] mx-auto text-center mt-20 pt-20">
				<div>
					<h1 className="text-3xl pb-20">
						Total volume secured :{" "}
						<span className="text-lg text-[#00d8ff]">$42,786,456,890</span>{" "}
					</h1>
				</div>
				<div>
					<h1 className="text-3xl pb-3">A growing protocol system</h1>
					<p className="text-xs text-slate-100 pb-3  px-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
						rem possimus asperiores doloribus nemo{" "}
					</p>
				</div>
			</div>

            <Aboutcard/>
		</div>
	);
}

export default About

