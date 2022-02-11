import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { searchVideoByCategory } from '../../../utils/searchVideoByCategory';

export default function VideoHot() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchVideoByCategory('', 4);
        setVideos(data)
    }
    return (
        <div className='collumn-medium collumn-right lg-hidden'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    VIDEO HOT
                </div>
            </div>
            <div className='collumn-right__item'>
                {videos?.length > 0 && videos?.map((video, index) => {
                    return (
                        <a href='#' target='blank' key={index}>
                            <div className='item__video'>
                                <div className='thumbnail__video'>
                                    {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='300' height="225" />
                                        : <Image src={require('../../../images/item.jpg')} width='300' height="225" />
                                    }
                                    <div className="section-video-item-play">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='content__video'>
                                    <a href='#'>
                                        <h3 className="video-item-title">{video?.title}</h3>
                                    </a>
                                    <a href="#"><span className="video-item-channel item-genre">{video?.category?.title}</span></a>
                                    &nbsp;
                                    <span className="video-item-date">
                                        / {video?.createdDate?.toDate().toLocaleString('vi')}
                                    </span>
                                </div>
                            </div>
                        </a>
                    )
                })}

            </div>
        </div>
    )
}