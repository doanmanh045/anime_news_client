import React from 'react';
import MainAnimeNews from '../src/component/home-blog/anime-news/MainAnimeNews';
import AnimeNomination from '../src/component/home-blog/anime-nomination/AnimeNomination';
import Character from '../src/component/home-blog/character/Character';
import Cosplay from '../src/component/home-blog/cosplay/Cosplay';
import MainSlide from '../src/component/home-blog/goc-cua-fan/MainSlide';
import JapanCultural from '../src/component/home-blog/japan-cultural/JapanCultural';
import MainHomeBlog from '../src/component/home-blog/MainHomeBlog';
import NavHomeBlog from '../src/component/home-blog/NavHomeBlog';
import Newest from '../src/component/home-blog/newest/Newest';
import SectionVideo from '../src/component/home-blog/section-video/SectionVideo';
import HeaderBlog from '../src/component/share/HeaderBlog';

export default function Home() {
  return (
    <>
      <HeaderBlog />
      <div className='blog-page' style={{ padding: "60px 0" }}>
        <div>
          <NavHomeBlog />
        </div>
        <div>
          <MainHomeBlog />
        </div>
        <div>
          <MainAnimeNews />
        </div>
        <div>
          <MainSlide />
        </div>
        <div>
          <AnimeNomination />
        </div>
        <div>
          <SectionVideo />
        </div>
        <div>
          <JapanCultural />
        </div>
        <div>
          <MainSlide />
        </div>
        <div>
          <Character />
        </div>
        <div>
          <MainSlide />
        </div>
        <div>
          <Cosplay />
        </div>
        <div>
          <Newest />
        </div>
      </div>
    </>
  )
}
