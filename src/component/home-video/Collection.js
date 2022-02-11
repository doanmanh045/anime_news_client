import React from 'react';
import Image from 'next/image';
import Spring from '../../images/video/collection/xuan.jpg';
import Summer from '../../images/video/collection/ha.jpg';
import Autumn from '../../images/video/collection/thu.jpg';
import Winter from '../../images/video/collection/dong.jpg'

export default function Collection() {
    return (
        <section className='tray section__collection'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>bộ sưu tập</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className="tray__content collection">
                <div className="collection__item">
                    <a href="#">
                        <Image className="collection__item--thumbnail" src={Winter} alt="Anime Mùa Đông 2022"/>

                    </a>
                </div><div className="collection__item">
                    <a href="#">
                        <Image className="collection__item--thumbnail" src={Autumn} alt="Anime Mùa Thu 2021"/>

                    </a>
                </div><div className="collection__item">
                    <a href="#">
                        <Image className="collection__item--thumbnail" src={Summer} alt="Anime Mùa Hè 2021"/>

                    </a>
                </div><div className="collection__item">
                    <a href="#">
                        <Image className="collection__item--thumbnail" src={Spring} alt="Anime mùa xuân 2021"/>

                    </a>
                </div>            
                </div>
        </section>
    )
}
