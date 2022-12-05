import React from 'react'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import './MovieInformationContainer.scss'

export const MovieInformationContainer = () => {
    return (
        <div className='movie-information-container-background'>
            <div className='movie-information-container'>
                <MovieCard />
                <h1 className='movie-information-title'>Movie name</h1>
                <h2 className='movie-information-score'>Movie Score</h2>
                <p className='movie-information-summary'>Movie Summary Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dolor eget dolor viverra porttitor sed congue ipsum. Integer lorem mauris, ornare sed ornare sed, egestas a purus. Sed feugiat nisi nisl, at euismod sem malesuada ac. Maecenas eu efficitur enim. Aliquam lorem urna, venenatis sit amet tempus lobortis, sollicitudin a turpis. Vivamus vitae turpis sem. Cras sed sodales nisl. Nulla rutrum sapien eu vestibulum elementum. Donec egestas, lectus a porta maximus, nunc justo placerat purus, ac sagittis leo dui fermentum elit. Duis id purus tristique, dignissim justo ac, elementum diam. Curabitur urna justo, pretium ac ultrices id, faucibus ut elit. Nam scelerisque risus sapien, sed ultrices lectus imperdiet quis. Proin tempor eros sit amet magna tincidunt consectetur. Integer ut maximus augue. Aenean vitae dictum lectus. Nulla et sapien non libero interdum vestibulum.</p>
            </div>
        </div>
    )
}

