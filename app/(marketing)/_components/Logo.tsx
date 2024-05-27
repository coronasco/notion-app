import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
	subsets: ["latin"],
	weight: ["400", "600"],
});

const Logo = () => {
	return (
		<div>
			<p className={cn("font-bold ", font.className)}>
				<span className="underline">N</span>otion
			</p>
		</div>
	);
};

export default Logo;
