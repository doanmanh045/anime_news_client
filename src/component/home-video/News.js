import React from 'react';
import Image from 'next/image';
import ItemNews from '../../images/video/news/item.jpg'

export default function News() {
    return (
        <section className='tray news'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>TIN ANIME</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className='tray__content news__content'>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
                <div className='news__content--item'>
                    <a href='#' target="_blank">
                        <Image className='news-item-thumbnail ' src={ItemNews} alt='' />
                    </a>
                    <div className='news-item-meta'>
                        <a href='#' target="_blank">
                            <div className="news-item-title">Cùng đón chờ bộ anime được chuyển thể từ trò chơi di động - Arknights</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
