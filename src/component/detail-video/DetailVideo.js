import React, { useEffect } from 'react';
import { firestore } from '../../utils/firebaseInit';
import VideoCartoon from '../home-video/VideoCartoon';
import VideoManga from '../home-video/VideoManga';
import VideoNewest from '../home-video/VideoNewest';
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
            <HeaderBlog />
            <div className='section container-video'>
                <div className='container-video main-detail'>
                    <div className='player'>
                        <div className='player__main'>
                            <div className='player__main--video'>
                                <iframe className='hero-player' src={`https://www.youtube.com/embed/${video.id}`} title={video?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className="player-meta">
                                    <h1 className="film-info-title">{video?.title}</h1>
                                    <div className="film-info-views">
                                        <span>{video?.views} lượt xem</span>
                                    </div>
                                </div>
                            </div>
                            <VideoCategory videoId={video.id} categoryId={video.categoryId} />
                            <div className='player__main--content'>
                                <div class="film-content">
                                    <div class="film__info">
                                        <div class="film__info--genre">
                                            Danh mục: {video?.category?.title}
                                        </div>
                                        <div class="film__info--description"
                                            dangerouslySetInnerHTML={{ __html: video?.content }}>
                                        </div>
                                        <div class="film__info--tag">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <VideoCartoon />
                <VideoManga />
                <VideoNewest />
            </div>

        </>
    )
}
