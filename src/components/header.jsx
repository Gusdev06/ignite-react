import igniteLogo from "../assets/ignite_logo.svg";

export function Header() {
	return (
		<header className="bg-gray_800	h-20 flex justify-center py-5 px-0 items-center">
			<img className="h-8" src={igniteLogo} alt="logotipo do ignite" />
		</header>
	);
}
