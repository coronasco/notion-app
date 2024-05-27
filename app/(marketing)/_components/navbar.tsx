"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
	const scrolled = useScrollTop();
	return (
		<div
			className={cn(
				"z-50 bg-gray-50 dark:bg-gray-800 fixed top-0 flex items-center w-full p-6",
				scrolled && "border-b shadow-lg px-6 py-4 transition-all "
			)}
		>
			<Logo />
			<div className="ml-4 md:ml-auto md:justify-end w-full flex items-center gap-x-2 text-sm ">
				<ModeToggle />
				<Button variant="link"> Log In</Button>
			</div>
		</div>
	);
};

export default Navbar;
