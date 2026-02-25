import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadContacts } from "../contactsActions";
import { ContactList } from "../components/ContactList";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    loadContacts(dispatch);
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add" className="btn btn-success">Add new contact</Link>
      </div>

      <ContactList />
    </div>
  );
};