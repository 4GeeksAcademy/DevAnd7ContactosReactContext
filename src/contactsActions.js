export const loadContacts = async (dispatch) => {
  try {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    dispatch({ type: "set_contacts", payload: contacts });
  } catch (error) {
    console.error("Error loading contacts:", error);
    dispatch({ type: "set_contacts", payload: [] });
  }
};

export const addContact = async (dispatch, contact) => {
  try {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const newContact = { ...contact, id: Date.now() };
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    dispatch({ type: "add_contact", payload: newContact });
  } catch (error) {
    console.error("Error adding contact:", error);
  }
};

export const updateContact = async (dispatch, id, contact) => {
  try {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const updatedContacts = contacts.map(c => c.id == id ? { ...contact, id: parseInt(id) } : c);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    dispatch({ type: "set_contacts", payload: updatedContacts });
  } catch (error) {
    console.error("Error updating contact:", error);
  }
};

export const deleteContact = async (dispatch, id) => {
  try {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const updatedContacts = contacts.filter(c => c.id != id);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    dispatch({ type: "set_contacts", payload: updatedContacts });
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};