import React from "react";

export function EventsSection({ t }) {
  return (
    <section className="events-section">
      <div className="container">
        <div className="bool">
          <h4>Eventos</h4>
          <hr />
        </div>

        <div className="events-content">
          <p className="no-events-text">{t.events.noEvents}</p>
          <div className="events-img-wrapper">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjBS-oeCT3YsVCUEYw3x_MUFT-m0qY_iTCRzg8YWc0OMwfqyakRp1HrNIqBXzYUVrfobLOhPsjgz2BIQGw9d7_gURCPn6oNUECKSZcltVxRosWMnbx03W4oZJw7kyDsolazUSuFdAsNmaEzexMvz6o8wReA-quJBoFBIfa3MLBc1AGjG48BAAHe8ykKik/s903/bob.png"
              alt="Bob Esponja - No hay eventos"
              className="events-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
