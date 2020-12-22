import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css'
import Search from './Search';
function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                
    <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton'
     variant='outlined'>{showSearch ? "Hide" : "Serch Dates"}</Button>
                {showSearch && <Search />}
            </div>
            <div className="banner__info">
                <h1>
                    Time to stretch out your imagination again
                </h1>
                <h5>
                    Plan a different kind of getaway this weekend
                </h5>
                <Button onClick={() => history.push('./search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
