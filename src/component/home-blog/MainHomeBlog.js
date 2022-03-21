import React from 'react';
import Head from 'next/head'

import FavouriteMainHomeBlog from './main/FavouriteMainHomeBlog';
import NewMainHomeBlog from './main/NewMainHomeBlog';
import RandomMainHomeBlog from './main/RandomMainHomeBlog';
import ViewMainHomeBlog from './main/ViewMainHomeBlog';
export default function MainHomeBlog() {
    return (
        <>
            <Head>
                <meta property="og:title" content="anime4u" />
                <meta property="og:image" content="https://play-lh.googleusercontent.com/VaGDgEc088GK5Td8AtUtQEXHD5nMOKUOeElxIeiJ4KBHuvbbi3lO5Mqwi9qH8X09cBOo" />
                <meta property="og:description" content="Nơi cập nhật các thông tin mới nhất,hấp dẫn" />
            </Head>
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
        </>
    )
}


