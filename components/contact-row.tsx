"use client";

import { userData } from "@/data";
type Contact = (typeof userData)[number];

const ContactRow = ({
	contact,
	onClick,
}: {
	contact: Contact;
	onClick: () => void;
}) => {
	return (
		<tr
			onClick={onClick}
			className="hover:bg-slate-300 transition-opacity cursor-pointer">
			<td className="p-2 border-b text-[0.9rem] font-medium text-center  border border-gray-300 overflow-auto max-h-16 w-32">
				{contact.name}
			</td>
			<td className="p-2 border-b text-[0.9rem] text-center  border border-gray-300 overflow-auto max-h-16 max-w-32">
				{contact.username}
			</td>
			<td className="p-2 border-b text-[0.9rem] text-center  border border-gray-300 overflow-auto max-h-16 max-w-32">
				{contact.phone}
			</td>
			<td className="p-2 border-b text-[0.9rem] text-center  border border-gray-300 overflow-auto max-h-16 max-w-32">
				{contact.email}
			</td>
			<td className="p-2 border-b text-[0.9rem] text-center  border border-gray-300 overflow-auto max-h-16 max-w-32">
				{contact.address.city}
			</td>
			{/* <td className="p-2 border-b text-[0.9rem] text-center  border border-gray-300 overflow-auto max-h-16 max-w-32">
				{contact.company.name}
			</td> */}
			<td className="p-2 border-b text-[0.9rem] text-center  border border-gray-300 overflow-auto max-h-16 max-w-32">
				<button className="bg-[#931639] text-white px-2 py-1 rounded-md">
					More
				</button>
			</td>
		</tr>
	);
};

export default ContactRow;
