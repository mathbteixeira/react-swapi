
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import '../../style/style.css';

import { doGet } from '../../helpers/ApiHelper';

const pEpisode = {
    'text-align': 'center'
};

const pTitle = {
    'text-align': 'center'
};

const Film = () => {

    const [film, setFilm] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        doGet(`/films/${id}`).then(setFilm);
    }, [id]);

    if(!film) { return (<h1>Loading...</h1>) };

    return (
        <>
            <body id="body_opening">
                <div id="opening">
                    <div>
                        <p style={pEpisode}>Episode {film.episode_id}</p>
                        <p style={pTitle}>{film.title}</p>
                        <br/>
                        <p>{film.opening_crawl}</p>
                    </div>
                </div>
            </body>
            <audio autoPlay preload controls>
                <source src="http://users.du.se/~dbe/mp3/Star%20Wars%20Trilogy%20(Original%20Motion%20Picture%20Soundtrack)/Star%20Wars%20Episode%20IV%20-%20A%20New%20Hope/Disc%201/John%20Williams%20-%20S.W.%20Ep.%20IV%20-%20%20CD%201%20-%2002%20-%20Main%20Title%20&%20Rebel%20Blockade%20Runner.mp3" type="audio/mpeg" />
            </audio>
        </>
    );
};

export default Film;



/*import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import { doGet } from '../../helpers/ApiHelper';


const h1Title = {
    'color': '#feda4a',
    'padding': '10px',
    'text-align':'center',
    'fontFamily': `'Pathway Gothic One', sans-serif`
};

const pOpening = {
    'color': '#feda4a',
    'padding': '20px',
    'fontFamily': `'Pathway Gothic One', sans-serif`,
    'fontSize': '18px',
    'textAlign': 'justify'
};

const pReleaseDate = {
    'margin-left': '20px',
    'fontFamily': `'Pathway Gothic One', sans-serif`
};

const starWars = {
    'display': 'flex',
    'justify-content': 'center',
    'height': '800px',
    'perspective': '400px',
    'color': '#feda4a',
    'font-family': 'Pathway Gothic One', 'sans-serif',
    'font-size': '500%',
    'font-weight': '600',
    'letter-spacing': '6px',
    'line-height': '150%',
    'text-align': 'justify'
  }

const Film = () => {

    const [film, setFilm] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        doGet(`/films/${id}`).then(setFilm);
    }, [id]);

    if(!film) { return (<h1>Loading...</h1>) };

    return (
        <>
            <h1 style={h1Title}>Episode {film.episode_id}: {film.title}</h1>
            <p style={pOpening}>{film.opening_crawl}</p>
            <p style={pReleaseDate}>
                <b>Released in: </b>{film.release_date}
            </p>
        </>
    );
};

export default Film;*/