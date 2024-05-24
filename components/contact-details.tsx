import { userData } from "@/data";
type Contact = (typeof userData)[number];

const ContactDetails = ({
	contact,
	onClose,
}: {
	contact: Contact;
	onClose: () => void;
}) => {
	return (
		<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg break-words">
			<div className="bg-[#931639] p-4">
				<h2 className="text-2xl text-white font-semibold">
					{contact.name}
				</h2>
				<p className="text-white">{contact.username}</p>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-semibold mb-2">
					Contact Information
				</h3>
				<p className="mb-2">
					<strong>Email:</strong> {contact.email}
				</p>
				<p className="mb-2">
					<strong>Phone:</strong> {contact.phone}
				</p>
				<p className="mb-2">
					<strong>Website:</strong>{" "}
					<a
						href={`http://${contact.website}`}
						className="text-blue-500"
						target="_blank"
						rel="noopener noreferrer">
						{contact.website}
					</a>
				</p>

				<h3 className="text-lg font-semibold mb-2 mt-4">Address</h3>
				<p className="mb-2">
					<strong>Street:</strong> {contact.address.street}
				</p>
				<p className="mb-2">
					<strong>Suite:</strong> {contact.address.suite}
				</p>
				<p className="mb-2">
					<strong>City:</strong> {contact.address.city}
				</p>
				<p className="mb-2">
					<strong>Zipcode:</strong> {contact.address.zipcode}
				</p>
				<p className="mb-2">
					<strong>Geo:</strong> Lat: {contact.address.geo.lat}, Lng:{" "}
					{contact.address.geo.lng}
				</p>

				<h3 className="text-lg font-semibold mb-2 mt-4">Company</h3>
				<p className="mb-2">
					<strong>Name:</strong> {contact.company.name}
				</p>
				<p className="mb-2">
					<strong>Catchphrase:</strong> {contact.company.catchPhrase}
				</p>
				<p className="mb-2">
					<strong>BS:</strong> {contact.company.bs}
				</p>
				<div className="flex justify-end">
					<button
						onClick={onClose}
						className="mt-4 bg-[#931639] text-white px-4 py-2 rounded-md">
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
