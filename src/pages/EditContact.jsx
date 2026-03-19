import { useEffect, useState } from "react";
import { updateContact } from "../contactsActions";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const contact = store.contacts.find(c => c.id === parseInt(id));

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (contact) {
      setForm({
        full_name: contact.full_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address
      });
    }
  }, [contact]);

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
        <input
          className="form-control mb-3"
          name="full_name"
          value={form.full_name}
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          className="form-control mb-3"
          name="email"
          value={form.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          className="form-control mb-3"
          name="phone"
          value={form.phone}
          placeholder="Enter phone"
          onChange={handleChange}
        />
        <input
          className="form-control mb-3"
          name="address"
          value={form.address}
          placeholder="Enter address"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Save</button>
      </form>

      <Link to="/" className="d-block mt-3">
        or get back to contacts
      </Link>
    </div>
  );
};