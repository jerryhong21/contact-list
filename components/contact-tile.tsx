import React from "react";
import { userData } from "@/data";

type RenderClickFn = () => void;

// type ContactTileProps = (typeof userData[number]);
type ContactTileProps = {
	name: string;
	userName: string;
	id: number;
	renderClick?: RenderClickFn;
};

export default function ContactTile({
	name,
	userName,
	id,
}: // renderClick,
ContactTileProps) {
	// onClick={() => renderClick()}

	return (
		// <div className="max-w-[10rem] w-[10rem] h-[3rem] hover:bg-gray-200 bg-yellow-100 text-center border-solid rounded">
		// 	<div className="font-medium">{name}</div>
		// 	<div className="italic">{userName}</div>
		// </div>
		<div>
			<div className="flex justify-center items-center text-center">
				<div className="w-[13rem] h-[4rem] bg-[#8A1B30] text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 hover:opacity-85">
					<div className="text-sm font-medium">{name}</div>
					<div className="text-sm italic">{userName}</div>
				</div>
			</div>
		</div>
	);
}
