import React from 'react'

const Developer = () => {
  return (
		<div className="mx-auto text-center mt-20 mb-20">
			<div className="text-2xl ">
				<h1 className="pb-2 px-1 uppercase">
					Powers For{" "}
					<span className="text-[#00acc1] uppercase font-[kanit] font-bold pb-2 mx-2">
						defi
					</span>{" "}
					Developers
				</h1>
			</div>
			<p className="text-xs text-slate-100 pb-3 mx-2 ">
				Lorem ipsum,{" "}
				<span className="text-[#00acc1] uppercase font-[kanit] font-bold pb-2 mx-2">
					documentation
				</span>{" "}
				dolor sit amet consectetur adipisicing elit. Illo, saepe! Doloribus
				ipsum provident minus nobis delectus aut
			</p>

			<button className="px-4 py-2 rounded-md bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] font-[kanit] hover:bg-[#00d8ff] mt-2">
				Use Defi
			</button>
		</div>
	);
}

export default Developer

