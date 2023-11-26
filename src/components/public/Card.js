import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ mascota }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
      <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          src={mascota.image}
          alt="imagen"
        />
        
          {mascota.species}
        
        <h3 className="mb-0 text-dark">{mascota.name}</h3>

        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/details/${mascota.id}`} className="mt-3 btn btn-primary btn-lg">
                  Detalle
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
