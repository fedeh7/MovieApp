import React from 'react';
import ReactDOM from 'react-dom/client';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './MovieCardsContainer.scss'


export const MovieCardsContainer = () => {

    return (
        <main className="movie-cards-container-background">
            <div className='movie-cards-container'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            
        </main>
    )

}