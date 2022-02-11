import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { convertUrlSlug } from '../../utils/RegexUrl';
import { searchVideoByCategory } from '../../utils/searchVideoByCategory';
export default function VideoAnime() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchVideoByCategory('Tất cả anime', 8);
        setVideos(data)
    }
    return (
        <section className='tray news'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>Tất cả ANIME</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className='tray__content news__content'>
                {videos.length > 0 && videos.map((video, index) => {
                    return (
                        <Link href={`/video/${convertUrlSlug(video.title.substring(0, 35))}-${video.id}`} key={index}  >
                            <div className='news__content--item' style={{ cursor: 'pointer' }} >
                                <a href='#' target="_blank">
                                    {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='120' height="55" />
                                        : <Image className='news-item-thumbnail ' src={require('../../images/item.jpg')} width='320' height="225" />
                                    }
                                </a>
                                <div className='news-item-meta'>
                                    <a href='#' target="_blank">
                                        <div className="news-item-title">{video?.title}</div>
                                    </a>
                                </div>
                            </div>

                        </Link>

                    )
                })}
            </div>
        </section>
    )
}
