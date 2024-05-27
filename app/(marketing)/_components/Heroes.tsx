import Image from "next/image";

const Heroes = () => {
	return (
		<div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl">
			<Image src="/heroes.jpeg" fill className="object-contain" alt="Notion" />
		</div>
	);
};

export default Heroes;
