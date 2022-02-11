import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { convertUrlSlug } from '../../utils/RegexUrl';
import { searchVideoByCategory } from '../../utils/searchVideoByCategory';

export default function VideoNewest() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchVideoByCategory('', 12);
        setVideos(data)
    }
    return (
        <section className='tray episode'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>Tập Mới Nhất</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className='tray__content episode__item'>
                {videos.length > 0 && videos.map((video, index) => {
                    return (
                        <Link href={`/video/${convertUrlSlug(video.title.substring(0, 35))}-${video.id}`} key={index} >
                            <div className='tray__content--item' style={{ cursor: 'pointer' }} >
                                {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='320' height="225" />
                                    : <Image src={require('../../images/item.jpg')} width='320' height="225" />
                                }
                                <div className="tray-item-description">
                                    <div className="tray-item-title">{video?.title}</div>
                                    <div className="tray-item-meta-info">
                                        <span className="tray-episode-name">{video?.category?.title}</span>
                                        <span className="tray-episode-views">{video?.views} lượt xem</span>
                                    </div>
                                </div>
                                <div className="tray-item-play-button">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}
