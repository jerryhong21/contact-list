"use client";

import ContactRow from "@/components/contact-row";
import { userData } from "@/data";
import { useState, useEffect } from "react";
import ContactPopup from "./contact-popup";
import { searchContacts, filterContacts } from "@/utils/helpers";

type Contact = (typeof userData)[number];
interface ContactTableProps {
	searchStr: string;
	cityFilter: string;
	companyFilter: string;
}

const ContactTable = ({
	searchStr,
	cityFilter,
	companyFilter,
}: ContactTableProps) => {
	const [selectedContact, setSelectedContact] = useState<Contact | null>(
		null
	);
	const [originalContact] = useState<Contact[]>(userData);
	const [filteredContacts, setFilteredContacts] =
		useState<Contact[]>(userData);
	const handleRowClick = (contact: Contact) => {
		setSelectedContact(contact);
	};

	const handlePopupClose = () => {
		setSelectedContact(null);
	};

	// Searchbar filter listener
	useEffect(() => {
		setFilteredContacts(searchContacts(filteredContacts, searchStr));
	}, [searchStr]);

	// Filters
	useEffect(() => {
		if (cityFilter.length === 0 && companyFilter.length === 0) {
			setFilteredContacts(originalContact);
		} else {
			setFilteredContacts(
				filterContacts(originalContact, cityFilter, companyFilter)
			);
		}
	}, [cityFilter, companyFilter]);

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border table-auto border-collapse">
				<thead>
					<tr>
						<th className="p-2 border-b-2">Name</th>
						<th className="p-2 border-b-2">Username</th>
						<th className="p-2 border-b-2">Phone</th>
						<th className="p-2 border-b-2">Email</th>
						<th className="p-2 border-b-2">City</th>
						<th className="p-2 border-b-2"></th>
					</tr>
				</thead>
				<tbody>
					{searchStr.length === 0 &&
					cityFilter.length === 0 &&
					companyFilter.length === 0
						? originalContact.map((contact, index) => (
								<ContactRow
									key={index}
									contact={contact}
									onClick={() => handleRowClick(contact)}
								/>
						  ))
						: filteredContacts.map((contact, index) => (
								<ContactRow
									key={index}
									contact={contact}
									onClick={() => handleRowClick(contact)}
								/>
						  ))}
				</tbody>
			</table>
			{selectedContact && (
				<ContactPopup
					contact={selectedContact}
					onClose={handlePopupClose}
				/>
			)}
		</div>
	);
};

export default ContactTable;
