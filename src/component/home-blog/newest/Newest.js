import React from 'react';
import InDayBlog from './InDayBlog';
import NewestBlog from './NewestBlog';

export default function Newest() {
    return (

        <div className='section anime-news newest container'>
            <div className='wrapper'>
                <NewestBlog />
                <InDayBlog />
            </div>
        </div>

    )
}
