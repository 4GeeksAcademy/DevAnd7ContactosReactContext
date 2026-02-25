import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { updateContact, loadContacts } from "../contactsActions";

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  // Cargar contactos si no están cargados
  useEffect(() => {
    if (store.contacts.length === 0) {
      loadContacts(dispatch);
    }
  }, []);

  // Cuando los contactos estén cargados, rellenar el formulario
  useEffect(() => {
    const contact = store.contacts.find(c => c.id == id);
    if (contact) {
      setForm({
        full_name: contact.full_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address
      });
    }
  }, [store.contacts]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateContact(dispatch, id, form);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1>Edit contact</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <input className="form-control mb-3" name="full_name" value={form.full_name} onChange={handleChange} />
        <input className="form-control mb-3" name="email" value={form.email} onChange={handleChange} />
        <input className="form-control mb-3" name="phone" value={form.phone} onChange={handleChange} />
        <input className="form-control mb-3" name="address" value={form.address} onChange={handleChange} />

        <button className="btn btn-primary">Save</button>
      </form>

      <Link to="/" className="d-block mt-3">or get back to contacts</Link>
    </div>
  );
};