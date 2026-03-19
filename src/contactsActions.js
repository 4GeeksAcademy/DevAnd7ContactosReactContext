const AGENDA = "agendadevand7";
const BASE_URL = `https://playground.4geeks.com/contact/agendas/${AGENDA}`;
const CONTACTS_URL = `${BASE_URL}/contacts`;

// Cargar contactos desde el servidor
export const loadContacts = async (dispatch) => {
  try {
    const res = await fetch(CONTACTS_URL);

    if (res.status === 404) {
      await fetch(BASE_URL, { method: "POST" });
      dispatch({ type: "set_contacts", payload: [] });
      return;
    }

    const data = await res.json();

  const normalized = (data.contacts || []).map(c => ({
  ...c,
  full_name: c.name
}));

    dispatch({ type: "set_contacts", payload: normalized });

  } catch (error) {
    console.error("Error loading contacts:", error);
    dispatch({ type: "set_contacts", payload: [] });
  }
};

// Crear contacto en el servidor
export const addContact = async (dispatch, contact) => {
  try {
    const payload = {
      name: contact.full_name,   // ← CONVERTIMOS AQUÍ
      email: contact.email,
      phone: contact.phone,
      address: contact.address
    };

    const res = await fetch(CONTACTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Error creating contact");

    loadContacts(dispatch);

  } catch (error) {
    console.error("Error adding contact:", error);
  }
};

// Actualizar contacto en el servidor
export const updateContact = async (dispatch, id, contact) => {
  try {
    const payload = {
      name: contact.full_name,
      email: contact.email,
      phone: contact.phone,
      address: contact.address
    };

    const res = await fetch(`${CONTACTS_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Error updating contact");

    loadContacts(dispatch);

  } catch (error) {
    console.error("Error updating contact:", error);
  }
};

// Eliminar contacto en el servidor
export const deleteContact = async (dispatch, id) => {
  try {
    const res = await fetch(`${CONTACTS_URL}/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Error deleting contact");

    loadContacts(dispatch);

  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};