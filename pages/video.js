import React from 'react';
import VideoAll from '../src/component/home-video/VideoAll';
import VideoAnime from '../src/component/home-video/VideoAnime';
import VideoCartoon from '../src/component/home-video/VideoCartoon';
import VideoManga from '../src/component/home-video/VideoManga';
import VideoNewest from '../src/component/home-video/VideoNewest';
import HeaderBlog from '../src/component/share/HeaderBlog';
export default function HomeVideoPage() {
    return (
        <>
            <HeaderBlog />
            <div className='video-page container-video' style={{ padding: "60px 0" }}>
                <div>
                    <VideoNewest />
                </div>
                <div>
                    <VideoAnime />
                </div>
                <div>
                    <VideoCartoon />
                </div>
                <div>
                    <VideoManga />
                </div>
                <div>
                    <VideoAll />
                </div>
            </div>
        </>
    )
}
