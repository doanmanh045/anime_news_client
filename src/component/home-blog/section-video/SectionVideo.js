import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { searchVideoByCategory } from '../../../utils/searchVideoByCategory';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';
export default function SectionVideo() {
    const [videoBigs, setVideoBigs] = useState([]);
    const [videoLists, setVideoLists] = useState([]);
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchVideoByCategory('', 4);
        let respBig = [];
        let respList = [];
        data?.map((item, index) => {
            if (index < 1) {
                respBig.push(item)
            } else {
                respList.push(item)
            }
        })
        setVideoBigs(respBig)
        setVideoLists(respList)
    }
    return (

        <div className='section section-video'>
            <div className='container'>
                <div className='big-wrapper'>
                    <div className='left__col'>
                        <a href='#' target='blank'>
                            {videoBigs?.length > 0 &&
                                <Link href={`/video/${convertUrlSlug(videoBigs[0].title.substring(0, 35))}-${videoBigs[0].id}`}  >
                                    <div className='wrapper big-video'>
                                        <div className='wrapper-image rps-iframe'>
                                            {videoBigs[0]?.photoURL ? <Image unoptimized loader={() => { return `${videoBigs[0]?.photoURL}` }} src={videoBigs[0]?.photoURL} width='300' height="225" />
                                                : <Image src={require('../../../images/item.jpg')} width='600' height="225" />
                                            }
                                        </div>
                                        <div className='left__col--content'>
                                            <div className="section-video-item-play">
                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                                </svg>
                                            </div>
                                            <div className="section-video-item-meta item-meta">
                                                <span className="section-video-item-channel item-genre">{videoBigs[0]?.category?.title}</span>
                                                &nbsp;
                                                <span className="section-video-item-date item-date">/
                                                    &nbsp;  {videoBigs[0]?.createdDate?.toDate()?.toLocaleString('vi')}
                                                </span>
                                                <h3 className="section-video-item-title item__title">{videoBigs[0]?.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                        </a>
                    </div>
                    <div className='right__col'>
                        {videoLists?.length > 0 && videoLists.map((video, index) => {
                            return (
                                <Link href={`/video/${convertUrlSlug(video.title.substring(0, 35))}-${video.id}`} key={index}  >
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
                                            <span className="section-video-item-channel item-genre">{video?.category?.title}</span>
                                            &nbsp;
                                            <span className="section-video-item-date item-date">/
                                                &nbsp; {video?.createdDate?.toDate().toLocaleString('vi')}
                                            </span>
                                            <h3 className="video-item-title"><h3 className="section-video-item-title">{video?.title}</h3></h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}
