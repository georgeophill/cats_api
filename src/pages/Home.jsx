import React, { useEffect, useState } from "react";
import axios from "axios";
import { catOptions } from "../options";
import {MdFavorite} from 'react-icons/md';
import {apiKey} from '../env';

export const Home = () => {

    const [catData, setCatData] = useState(null);


    const fetchData = () => {
        axios
            .get(
            'https://api.thecatapi.com/v1/images/search?limit=10',
            catOptions
        )
        .then (response => setCatData(response.data))
        .catch((error) => console.log("Error trying to fetch data"))
    };

    useEffect(() => {
        fetchData()
    }, []);

    const handleOnClick = (e) => {
        e.preventDefault();
        fetchData();
    }


    const onClickAdd = (event, catId) => {
        event.preventDefault();

            const catdAddFavouriteOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    method: 'POST',
                    url: 'https://api.thecatapi.com/v1/favourites',
                },
            };
            var data = {
                image_id: catId,
                sub_id: "my-user-1"
            }
            axios.post(
                'https://api.thecatapi.com/v1/favourites',
                data,
                catdAddFavouriteOptions
            )
            .then((response) => console.log(response))
            .catch((error) => {
                console.log(error);
            })
        }

    return (
    <section className="main-container">
        <div className="image-grid">
            {catData?.slice(0, 6).map((cat) => (
                <div className="image-button-pair">
                    <img className="grid-image" src={cat.url} alt="cats" />
                    <button className="grid-button" onClick={(event) => onClickAdd(event, cat.id)} >
                        <div className="material-symbols-outlined navbar-icons">
                            <MdFavorite style={{fontsize:"25px"}}/>
                        </div>
                    </button>
                </div>
            ))}
        </div>

        <div className="main-container-description">
            <h2 className="main-container-title">Cat Image Generator</h2>
            <div className="main-container-text">
                Click the Randomise button to display new cat Images!
            </div>
            <button className="main-container-button" onClick={handleOnClick}>Randomise</button>
        </div>
    </section>
);
}