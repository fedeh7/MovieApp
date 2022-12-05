import React from 'react';
import ReactDOM from 'react-dom/client';
import './HeaderContainer.scss'
import { SearchBar } from '../../components/SearchBar';

export const HeaderContainer = () => {
    const headerTitle = ( <h1 className='header-title'>Eventbrite's New Movie Website</h1>)
    const headerSubtitle =(<h2 className='header-subtitle'>Find the best movies</h2>)
    return (
        <header className="header-container">
            {headerTitle}
            {headerSubtitle}

            <SearchBar />
        </header>
        
    )

}