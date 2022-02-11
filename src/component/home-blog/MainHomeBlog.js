import React from 'react';
import FavouriteMainHomeBlog from './main/FavouriteMainHomeBlog';
import NewMainHomeBlog from './main/NewMainHomeBlog';
import RandomMainHomeBlog from './main/RandomMainHomeBlog';
import ViewMainHomeBlog from './main/ViewMainHomeBlog';
export default function MainHomeBlog() {
    return (
        <section className='section main-blog container'>
            <div className='main-blog__wrapper'>
                <div className='collumn-super'>
                    <ViewMainHomeBlog />
                    <NewMainHomeBlog />

                </div>
                <div className='main-blog__col small__col'>
                    <RandomMainHomeBlog />
                    <FavouriteMainHomeBlog />
                </div>
            </div>
        </section>
    )
}


