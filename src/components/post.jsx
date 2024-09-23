import { useState } from "react";

export function Post() {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<>
			<article className="bg-gray_800 rounded-lg py-10 px-10 ">
				{/* POST */}
				<header className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						{/* author */}
						<img
							className="w-[calc(3rem+12px)]  h-[calc(3rem+12px)] rounded-lg border-4 border-gray_800 outline outline-2 outline-green_500"
							src="https://github.com/gusdev06.png"
							alt="Avatar"
						/>
						{/* avatar */}
						<div className="">
							{/* authorInfo */}
							<strong className="block text-gray_100 leading-relaxed">
								Gustavo Gomes
							</strong>
							<span className="block text-sm text-gray_400 leading-relaxed">
								Backend developer
							</span>
						</div>
					</div>
					<time
						className="text-sm text-gray_400"
						title="11 de Maio as 08:13"
						dateTime="2024-05-11 08:13:00"
					>
						Publicado há 1 hora
					</time>
				</header>
				<div className="flex flex-col leading-relaxed text-gray_300 mt-6 gap-4">
					<p>Fala galeraa 👋</p>
					<p>
						Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
						no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
						🚀
					</p>
					<p>
						👉{" "}
						<a
							href=""
							className="font-bold text-green_500 leading-relaxed hover:text-green_300"
						>
							jane.design/doctorcare
						</a>
					</p>
					<p>
						<a
							href=""
							className="font-bold text-green_500 leading-relaxed hover:text-green_300"
						>
							#novoprojeto
						</a>{" "}
						<a
							href=""
							className="font-bold text-green_500 leading-relaxed hover:text-green_300"
						>
							#nlw
						</a>{" "}
						<a
							href=""
							className="font-bold text-green_500 leading-relaxed hover:text-green_300"
						>
							#rocketseat
						</a>
					</p>
				</div>
				<form className="w-full mt-6 pt-6 border-t-[1px] border-gray_600">
					<strong className="leading-relaxed text-gray_100">
						Deixe seu feedback
					</strong>
					<textarea
						className="w-full bg-gray_900 border-0 resize-none h-[6rem] p-4 rounded-lg text-gray_100 leading-[1.4] mt-4"
						placeholder="Deixe um comentário"
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
					/>
					<footer
						className={`${
							isFocused ? "visible max-h-[100px]" : "invisible max-h-0"
						} `}
					>
						<button
							type="submit"
							className="py-4 px-6 hover:bg-green_300 bg-green_500 text-white  font-bold mt-4 rounded-lg"
						>
							Comentar
						</button>
					</footer>
				</form>
			</article>
		</>
	);
}
