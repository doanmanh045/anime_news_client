import React from 'react';
import ImgVideo from '../../../images/blog/section-video/a.jpg'
import MediumThumbnail from '../../../images/blog/anime-news/item-left.jpg';
import Image from 'next/image';
import BlogCosplay from './BlogCosplay';
import BlogMix from './BlogMix';
import VideoHot from './VideoHot';
export default function Cosplay() {
    return (
        <div className='section cosplay container'>
            <div className='big__wrapper'>
                <BlogCosplay />
                <BlogMix />
                <VideoHot />
            </div>

        </div>
    )
}
