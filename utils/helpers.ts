import { userData } from "@/data";

type Contact = (typeof userData)[number];

// Returns all contacts with an attribute that matches the search string
export const searchContacts = (
	contacts: Contact[],
	searchStr: string
): Contact[] => {
	const lowercasedSearchStr = searchStr.toLowerCase();

	return contacts.filter((contact) => {
		return (
			contact.name.toLowerCase().includes(lowercasedSearchStr) ||
			contact.username.toLowerCase().includes(lowercasedSearchStr) ||
			contact.email.toLowerCase().includes(lowercasedSearchStr) ||
			contact.phone.toLowerCase().includes(lowercasedSearchStr) ||
			contact.website.toLowerCase().includes(lowercasedSearchStr) ||
			contact.address.street
				.toLowerCase()
				.includes(lowercasedSearchStr) ||
			contact.address.suite.toLowerCase().includes(lowercasedSearchStr) ||
			contact.address.city.toLowerCase().includes(lowercasedSearchStr) ||
			contact.address.zipcode
				.toLowerCase()
				.includes(lowercasedSearchStr) ||
			contact.address.geo.lat
				.toLowerCase()
				.includes(lowercasedSearchStr) ||
			contact.address.geo.lng
				.toLowerCase()
				.includes(lowercasedSearchStr) ||
			contact.company.name.toLowerCase().includes(lowercasedSearchStr) ||
			contact.company.catchPhrase
				.toLowerCase()
				.includes(lowercasedSearchStr) ||
			contact.company.bs.toLowerCase().includes(lowercasedSearchStr)
		);
	});
};

export const filterContacts = (
	contacts: Contact[],
	cityFilter: string,
	companyFilter: string
): Contact[] => {
	const lowercasedCityStr = cityFilter.toLowerCase();
	const lowercasedCompanyStr = companyFilter.toLowerCase();

	// contact-table.tsx handles case where both strings are empty
	if (cityFilter.length === 0) {
		return contacts.filter((contact) =>
			contact.company.name.toLowerCase().includes(lowercasedCompanyStr)
		);
	} else if (companyFilter.length === 0) {
        console.log("accessed")
		return contacts.filter((contact) =>
			contact.address.city.toLowerCase().includes(lowercasedCityStr)
		);
	}
	return contacts.filter((contact) => {
		return (
			contact.address.city.toLowerCase().includes(lowercasedCityStr) ||
			contact.company.name.toLowerCase().includes(lowercasedCompanyStr)
		);
	});
};
