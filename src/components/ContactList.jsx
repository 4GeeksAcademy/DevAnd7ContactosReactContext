import { ContactCard } from "./ContactCard";
import { deleteContact } from "../contactsActions";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();

  if (!store.contacts || store.contacts.length === 0) {
    return <p>No contacts found. Add a new contact to get started.</p>;
  }

  return (
    <div>
      {store.contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={() => deleteContact(dispatch, contact.id)}
        />
      ))}
    </div>
  );
};