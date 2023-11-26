import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Detail = () => {
  const [mascota, setMascota] = useState([]);

  const { id } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RickAndMortyService.getCharactersById(id).then((data) => setMascota(data));
  }, [id]);

  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            
<h3 className="mb-0 text-dark">{mascota.name}</h3>
            <div className="mb-1 text-muted">
              {new Date(mascota.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted">
              <p className="card-text black">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>

              <ul className="list-group mt-1">
              <li className="list-group-item">{mascota?.status}</li>
              <li className="list-group-item">{mascota?.gender}</li>
              <li className="list-group-item">{mascota?.species}</li>
            </ul>

              <div className="btn-group" style={{ marginLeft: "15px" }}>
                  <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
                    Volver
                  </Link>
              </div>
            </div>
          </div>
        
        <img
          className="img-fluid rounded-start imgDetalle"
          height="auto"
          src={mascota.image}
          alt="img del mascota"
        />
        </div>
      </div>
    </div>
  );
};
