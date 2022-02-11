import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { firestore } from '../../../utils/firebaseInit';
import BlogAnimeNews from './BlogAnimeNews';
import VideoAnimeNews from './VideoAnimeNews';
export default function MainAnimeNews() {
    const [category, setCategory] = useState();
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        try {
            let filter = firestore
                .collection("CategoryBlog")
                .where("title", "==", "Tin Anime")
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            setCategory(resp[0])
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <div className='section anime-news container'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    TIN TỨC ANIME
                </div>
            </div>
            <div className='wrapper'>
                <BlogAnimeNews />
                <div className='anime-news__right'>
                    {category?.photoURL && <Image unoptimized loader={() => { return `${category?.photoURL}` }} src={category?.photoURL} width='400' height="325" />}
                    <VideoAnimeNews />
                </div>
            </div>
        </div>
    )
}
