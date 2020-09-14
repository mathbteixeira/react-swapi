import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {doGet, getIdFromUrl} from '../../helpers/ApiHelper';

import Button from '@material-ui/core/Button';

const menu = {
    'color': 'yellow',
    'background': 'black',
    'text-decoration': 'none',
    'fontFamily': `'Pathway Gothic One', sans-serif`
};

const Home = () => {
    const [people, setPeople] = useState([]);

    const [films, setFilm] = useState([]);

    useEffect(() => {
        doGet('/people').then(response => setPeople(response.results));
        doGet('/films').then(response2 => setFilm(response2.results));
    }, []);

    if ((!people || !people.length ) && (!films || !films.length )) {
        return(<h1>Loading...</h1>)
    }

    const peopleList = people.map(p => {
        const id = getIdFromUrl(p.url);
        return(
            <li key={p.url}> 
                <Link to={`/detail/${id}`} style={menu} >{p.name}</Link>
            </li>
        );
    });

    const filmList = films.map(f => {
        const id = getIdFromUrl(f.url);
        return(
            <li key={f.url}> 
                <Link to={`/films/${id}`} style={menu} >{f.title}</Link>
            </li>
        );
    });

    return (
        <>
            <h1 style={menu} >Characters</h1>
            <ul>{peopleList}</ul>
            <h1 style={menu} >Films</h1>
            <ul>{filmList}</ul>
        </>
    );
};

export default Home;