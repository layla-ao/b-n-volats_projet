import React from 'react';
import { useNavigate } from "react-router-dom";

const EventsList = ({ events, setEvents, setEventToEdit }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id)); // Supprime l'événement par son ID
  };

  const handleEdit = (event) => {
    setEventToEdit(event);
    navigate("/Dashboard"); // Redirige vers la page de modification
  };

  return (
    <div className="events-list">
      <h2>Liste des Événements</h2>
      {events.length === 0 ? (
        <p>Aucun événement créé pour le moment.</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-body">
                <strong>Catégorie : {event.categorie}</strong>
                <h3>Titre : {event.title}</h3>
                <small>Date : {event.date}</small>
                <p>Description : {event.description}</p>
                {event.image && (
                  <img
                    src={event.image}
                    alt="Événement"
                    className="event-image"
                  />
                )}
              </div>
              <div className="event-card-footer">
          
                <button
                  className="button-danger"
                  onClick={() => handleDelete(event.id)} // Bouton Supprimer
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
