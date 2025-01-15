import React from 'react';
import { SeriesCard } from 'character-journey-map';
import { AvailableSeries, DATA } from '../../data';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <header>
                <h1>Inheritance Cycle Maps</h1>
                <p className='alt'>An Interactive Map of the journeys in the Inheritance Cycle</p>
                <p>Interactively follow the characters in the Inheritance Cycle books and see where they are at
                any time in the story. You can select each character and book to show as well as specify which
                chapters you would like to see. There are obviously spoilers.<br/>
                I chose to separate Murtagh and The Fork, the Witch and the Worm into separate maps to avoid clutter.</p>
                <label className='desktop-warning'>For the best experience, use a tablet or desktop.</label>
            </header>
            <div className='series-list'>
                {
                    Object.keys(DATA)
                        .map((key: string) => (
                            <SeriesCard key={`series-card-${ key }`} series={DATA[key as AvailableSeries]} />
                        ))
                }
            </div>
            <footer>
                <p>This project was inspired by <a href='https://www.cosmeremaps.com/' target='_blank' rel={'noreferrer noopener'}>
                    Althon Chaney's Cosmere maps</a> and follows their implementation. Please visit their project if you are into Brandon Sanderson's books</p>
                <a href='https://github.com/altonchaney/cosmere-maps/issues' target='_blank' rel='noreferrer noopener'>
                    <p className='alt'>
                        Having issues? Submit them here.
                    </p>
                </a>
            </footer>
            <div className='background'/>
        </div>
    );
}

export default Home;