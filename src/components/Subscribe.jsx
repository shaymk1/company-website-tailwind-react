import React from "react";

const Subscribe = () => {
	return (
		<div className="mx-auto text-center mb-20">
			<h1 className="uppercase text-2xl pb-2">Join Our Defi Community</h1>
            {/*buttons*/}
			<div className=" text-center mx-auto items-center  space-x-2 ">
				
					<input className="rounded placeholder:text-xs placeholder:text-center" type="text" placeholder="email"/>
				
				
					<button className=" px-4 py-2 rounded-md bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] font-[kanit] hover:bg-[#00d8ff] ">
						Subscribe
					</button>
				</div>
			
		</div>
	);
};

export default Subscribe;
