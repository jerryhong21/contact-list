import { userData } from "@/data";
import ContactDetails from "./contact-details";
type Contact = (typeof userData)[number];

const ContactPopup = ({
	contact,
	onClose,
}: {
	contact: Contact;
	onClose: () => void;
}) => {
	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
			<ContactDetails contact={contact} onClose={onClose}/>
		</div>
	);
};

export default ContactPopup;
