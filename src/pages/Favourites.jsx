import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { catOptions } from '../options';

export const Favourites = () => {
    const [favourites, setFavourites] = useState(null);

    const [catData, setCatData] = useState([]);

    const featchData = () => {
        axios
            .get(
                'https://api.thecatapi.com/v1/favourites?sub_id=my-user-1',
                catOptions
            )
            .then((response) => setFavourites(response.data))
            .catch((error) => console.log("Error trying to fetch data"))

    }

    const populateArray = () => {
        favourites?.map((favourite) => {
            axios
                .get(
                    `https://api.thecatapi.com/v1/images/${favourite.image_id}`,
                    catOptions
                )
                .then((response) => setCatData([...catData, response.data])) 
                .catch((error) => console.log("Error trying to fetch data"))
        })
    }

    useEffect(() => {
        featchData();
        populateArray();
    }, []);

    return (
        <section className="favorite-container">
          <h1 className="favorite-image-title">Favorites</h1>
          <button className="favorites-button" onClick={populateArray}>
            Load favorites
          </button>
          <div className="favorite-image-grid">
            {catData?.slice(0, 9).map((cat) => (
              <div className="image-button-pair">
                <div> {cat.image_id}</div>
                <div>{cat.name}</div>
                <img className="grid-image" src={cat.url} />
              </div>
            ))}
          </div>
        </section>
      );
    };
