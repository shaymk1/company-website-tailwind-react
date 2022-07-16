import { BiPaperPlane } from "react-icons/bi";
import { BsFileCode } from "react-icons/bs";
import { TbNetwork } from "react-icons/tb";
import {SiQuickbooks} from "react-icons/si"
import {
	AiOutlineFundProjectionScreen,
	AiOutlineProject,
} from "react-icons/ai";

const Aboutcard = () => {
	return (
		<div>
			{/*card-container*/}
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto text-center pl-16 mt-6 py-6 flex-wrap mr-10">
				{/*card-1*/}
				<div className="border-2 border-[#00acc1] rounded-md text-left py-12 px-8  flex flex-col hover:translate-y-4 cursor-pointer">
					<div>
						{/*icon*/}
						<div className="m-5 text-[#00acc1]">
							<TbNetwork size={30} />
						</div>
						{/*content*/}
						<h2 className="uppercase text-lg mb-2 pl-1">Reliable Network</h2>
						<p className="text-xs text-slate-100 pb-3 px-2 ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							rem possimus asperiores doloribus nemo{" "}
						</p>
					</div>
				</div>
				{/*card-2*/}
				<div className="border-2 border-[#00acc1] rounded-md text-left py-12 px-8  flex flex-col hover:translate-y-4 cursor-pointer">
					<div>
						{/*icon*/}
						<div className="m-5 text-[#00acc1]">
							<BiPaperPlane size={30} />
						</div>
						{/*content*/}
						<h2 className="uppercase text-lg mb-2 pl-1">Fast Service</h2>
						<p className="text-xs text-slate-100 pb-3 px-2 ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							rem possimus asperiores doloribus nemo{" "}
						</p>
					</div>
				</div>

				{/*card-3*/}

				<div className="border-2 border-[#00acc1] rounded-md text-left py-12 px-8  flex flex-col hover:translate-y-4 cursor-pointer">
					<div>
						{/*icon*/}
						<div className="m-5 text-[#00acc1]">
							<BsFileCode size={30} />
						</div>
						{/*content*/}
						<h2 className="uppercase text-lg mb-2 pl-1">For Developers</h2>
						<p className="text-xs text-slate-100 pb-3 px-2 ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							rem possimus asperiores doloribus nemo{" "}
						</p>
					</div>
				</div>

				{/*card-4*/}
				<div className="border-2 border-[#00acc1] rounded-md text-left py-12 px-8  flex flex-col hover:translate-y-4 cursor-pointer">
					<div>
						{/*icon*/}
						<div className="m-5 text-[#00acc1]">
							<SiQuickbooks size={30} />
						</div>
						{/*content*/}
						<h2 className="uppercase text-lg mb-2 pl-1">Reliable Support</h2>
						<p className="text-xs text-slate-100 pb-3 px-2 ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							rem possimus asperiores doloribus nemo{" "}
						</p>
					</div>
				</div>
				{/*card-5*/}
				<div className="border-2 border-[#00acc1] rounded-md text-left py-12 px-8  flex flex-col hover:translate-y-4 cursor-pointer">
					<div>
						{/*icon*/}
						<div className="m-5 text-[#00acc1]">
							<AiOutlineFundProjectionScreen size={30} />
						</div>
						{/*content*/}
						<h2 className="uppercase text-lg mb-2 pl-1">Higher Projections</h2>
						<p className="text-xs text-slate-100 pb-3 px-2 ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							rem possimus asperiores doloribus nemo{" "}
						</p>
					</div>
				</div>

				{/*card-6*/}
				<div className="border-2 border-[#00acc1] rounded-md text-left py-12 px-8  flex flex-col hover:translate-y-4 cursor-pointer">
					<div>
						{/*icon*/}
						<div className="m-5 text-[#00acc1]">
							<AiOutlineProject size={30} />
						</div>
						{/*content*/}
						<h2 className="uppercase text-lg mb-2 pl-1">Consistent Progress</h2>
						<p className="text-xs text-slate-100 pb-3 px-2 ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							rem possimus asperiores doloribus nemo{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutcard;
