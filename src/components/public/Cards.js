import React, { useEffect, useState } from "react";
import RickAndMortyService from "../../services/RickAndMorty.service";
import { Card } from "./Card";

export const Cards = () => {
  const [mascotas, setmascotas] = useState([]);

  useEffect(() => {
    //esta constantemente escuhcando cambios
    RickAndMortyService.getAllCharacters()
      .then((data) => setmascotas(data.results))
      .catch((error) => console.log(error));
  }, [mascotas]); // variable a escuchar ante cambios

  const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
        </div>
      </div>
    </div>
  );
};
