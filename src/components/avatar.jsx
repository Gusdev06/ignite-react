export function Avatar(props) {
	return (
		<img
			className="w-[calc(3rem+12px)]  h-[calc(3rem+12px)] rounded-lg border-4 border-gray_800 outline outline-2 outline-green_500"
			src={props.src}
			alt=""
		/>
	);
}
