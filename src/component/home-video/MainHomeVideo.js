import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import HeroVideo from '../../images/video/hero.jpg'
import MediumVideo from '../../images/video/smallitem.jpg'
import { searchVideoByCategory } from '../../utils/searchVideoByCategory';
import { convertUrlSlug } from '../../utils/RegexUrl';
import Link from 'next/link';
export default function MainHomeVideo() {
    const [videoBig, setVideoBig] = useState([]);
    const [videoBottoms, setVideoBottoms] = useState([]);
    const [videoRights, setVideoRights] = useState([]);
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchVideoByCategory('');
        let respBig = [];
        let respBottom = [];
        let respRight = [];
        data?.map((item, index) => {
            if (index < 1) {
                respBig.push(item)
            } else if (index < 4) {
                respBottom.push(item)
            } else if (index < 8) {
                respRight.push(item)
            }
        })
        setVideoBig(respBig);
        setVideoBottoms(respBottom);
        setVideoRights(respRight);
    }

    return (
        <div className='tray section-hero'>
            <div className='row__hero'>
                {videoBig?.length > 0 && <div className='row__hero--left'>
                    <a href='#' className='hero-cover' target='_blank'>
                        {videoBig[0]?.photoURL ? <Image unoptimized loader={() => { return `${videoBig[0]?.photoURL}` }} src={videoBig[0]?.photoURL} width='1200' height="200" />
                            : <Image src={require('../../images/item.jpg')} width='500' height="380" />
                        }
                        <div className="slider-play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                            </svg>
                        </div>
                        <div className="slider-meta">
                            <span className="slider-views">{videoBig[0]?.category?.title}</span>
                            <div className="slider-title">{videoBig[0]?.title}</div>
                        </div>
                    </a>
                </div>}
                <div className='row__hero--right'>
                    {videoRights?.length > 0 && videoBottoms.map((video, index) => {
                        return (
                            <Link href={`/video/${convertUrlSlug(video.title.substring(0, 35))}-${video.id}`} className='right-item' key={index} >
                                {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='400' height="120" />
                                    : <Image src={require('../../images/item.jpg')} width='400' height="120" />
                                }
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='row__small md-hidden'>
                {videoBottoms?.length > 0 && videoBottoms.map((video, index) => {
                    return (
                        <a href='#' target='_blank' className='row__small--item' key={index} >
                            {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='300' height="220" />
                                : <Image src={require('../../images/item.jpg')} width='400' height="120" />
                            }
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
