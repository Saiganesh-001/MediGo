import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
    return (
        <div className="search-layout">
            <div>
                <div className="search-header">
                    <h2>What are you looking for?</h2>
                </div>
                <form action="#" className="search-bar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="#" placeholder="Search for medicine" id="#" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
    )
}

export default Searchbar