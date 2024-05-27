import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="flex justify-between border-t w-full py-2 px-6 md:py-6 bg-gray-50 dark:bg-gray-800 z-50">
			<div className="hidden md:flex flex-col">
				<Logo />
				<p className="text-xs text-gray-400">
					Designed & Built by Daniel Zaharia
				</p>
			</div>
			<div className="flex w-full justify-between md:justify-end md:w-1">
				<Button variant="ghost" size="sm">
					Privacy Policy
				</Button>
				<Button variant="ghost" size="sm">
					Terms & Conditions
				</Button>
			</div>
		</div>
	);
};

export default Footer;
