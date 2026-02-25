import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="card mb-3 p-3 d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src="https://i.pravatar.cc/100"
          className="rounded-circle me-3"
          width="80"
          height="80"
        />

        <div>
          <h5>{contact.full_name}</h5>
          <p className="mb-1"><i className="fa fa-map-marker me-2"></i>{contact.address}</p>
          <p className="mb-1"><i className="fa fa-phone me-2"></i>{contact.phone}</p>
          <p className="mb-1"><i className="fa fa-envelope me-2"></i>{contact.email}</p>
        </div>
      </div>

      <div>
        {/* BOTÓN DE EDITAR CORRECTO */}
        <Link to={`/edit/${contact.id}`} className="btn btn-outline-primary me-2">
          <i className="fa fa-pencil"></i>
        </Link>

        {/* BOTÓN DE BORRAR */}
        <button className="btn btn-outline-danger" onClick={onDelete}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};