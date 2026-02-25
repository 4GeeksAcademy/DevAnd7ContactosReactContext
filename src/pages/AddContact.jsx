import { useState } from "react";
import { addContact } from "../contactsActions";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addContact(dispatch, form);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1>Add a new contact</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <input className="form-control mb-3" name="full_name" placeholder="Full Name" onChange={handleChange} />
        <input className="form-control mb-3" name="email" placeholder="Enter email" onChange={handleChange} />
        <input className="form-control mb-3" name="phone" placeholder="Enter phone" onChange={handleChange} />
        <input className="form-control mb-3" name="address" placeholder="Enter address" onChange={handleChange} />

        <button className="btn btn-primary">Save</button>
      </form>

      <Link to="/" className="d-block mt-3">or get back to contacts</Link>
    </div>
  );
};