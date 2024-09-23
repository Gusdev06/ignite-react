import { Avatar } from "./avatar";
import { PencilLine } from "phosphor-react";
export function Sidebar() {
	return (
		<aside className="bg-gray_800 rounded-lg overflow-hidden">
			<img
				className="w-full h-[72px] object-cover"
				src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=20&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>
			<div className="flex flex-col items-center mt-[calc(0px-1.5rem-6px)]">
				<Avatar src="https://github.com/gusdev06.png" />
				<strong className="mt-4 text-gray_100 leading-relaxed">
					Gustavo Gomes
				</strong>
				<span className="text-sm">Backend developer</span>
			</div>
			<footer className="border-t-[1px] border-gray_600 mt-6 pt-6 px-8 pb-8">
				<a
					className="flex items-center justify-center bg-transparent text-green_500 border border-green_500 rounded-lg h-12 px-6 font-bold no-underline gap-2 hover:bg-green_500 hover:text-white transition-colors duration-200"
					href="#"
				>
					<PencilLine size={20} />
					Edit your profile
				</a>
			</footer>
		</aside>
	);
}
