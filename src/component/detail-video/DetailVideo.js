import React, { useEffect } from 'react';
import { firestore } from '../../utils/firebaseInit';
import Head from 'next/head'
import VideoCartoon from './VideoCartoon';
import VideoManga from './VideoManga';
import VideoNewest from './VideoNewest';
import HeaderBlog from '../share/HeaderBlog';
import VideoCategory from './VideoCategory';
export default function DetailVideo({ video }) {
    let fetchViews = async () => {
        try {
            await firestore.collection("Video").doc(video.id).get().then(doc => {
                let views = doc.data().views;
                firestore.collection("Video").doc(blog.id).update({
                    views: views + 1
                })
            })
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchViews()
    }, [])
    return (
        <>
            <Head>
                <meta property="og:title" content={video?.title} />
                <meta property="og:image" content={video?.photoURL} />
                <meta property="og:description" content={video?.title} />
            </Head>
            <HeaderBlog />
            <div className='section container-video'>
                <div className='container-video main-detail'>
                    <div className='player'>
                        <div className='player__main'>
                            <div className='player__main--video'>
                                <iframe className='hero-player' src={`https://www.youtube.com/embed/${video.id}`} title={video?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className="player-meta">
                                    <h1 className="film-info-title">{video?.title}</h1>
                                    <div className="film-info-views">
                                        <span>{video?.views} lượt xem</span>
                                    </div>
                                </div>
                            </div>
                            <VideoCategory videoId={video.id} categoryId={video.categoryId} />
                            <div className='player__main--content'>
                                <div className="film-content">
                                    <div className="film__info">
                                        <div className="film__info--genre">
                                            Danh mục: {video?.category?.title}
                                        </div>
                                        <div className="film__info--description"
                                            dangerouslySetInnerHTML={{ __html: video?.content }}>
                                        </div>
                                        <div className="film__info--tag">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <VideoCartoon videoId={video.id} />
                <VideoManga videoId={video.id} />
                <VideoNewest videoId={video.id} />
            </div>

        </>
    )
}
