import React from 'react';
import Image from 'next/image';
import Item1 from '../../images/video/rank/item1.jpg'
import Item2 from '../../images/video/rank/item2.jpg'
import Item3 from '../../images/video/rank/item3.jpg'
import Item4 from '../../images/video/rank/item4.jpg'
import Item5 from '../../images/video/rank/item5.jpg'
import Item6 from '../../images/video/rank/item6.jpg'
export default function Ranking() {
    return (
        <section className='tray section-ranking'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>Bảng xếp hạng</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className='tray__content ranking'>
                <div className="ranking__item l90 background-2">
                    <a href="/kimetsu-no-yaiba">
                        <div className="ranking__item--thumbnail">
                            <Image src={Item1} alt='' />
                        </div>
                        <div className="ranking__item--top">1</div>
                    </a>
                    <div className="ranking__item--meta">
                        <a href="/kimetsu-no-yaiba">
                            <div className="ranking-item-title">Kimetsu no Yaiba</div>
                        </a>
                    </div>
                </div>
                <div className="ranking__item l90 background-4">
                    <a href="#">
                        <div className="ranking__item--thumbnail">
                            <Image src={Item2} alt=''/>
                        </div>
                        <div className="ranking__item--top">2</div>
                    </a>
                    <div className="ranking__item--meta">
                        <a href="/boruto-naruto-next-generations">
                            <div className="ranking-item-title">Boruto: Naruto Next Generations</div>
                        </a>
                    </div>
                </div>
                <div className="ranking__item l90 background-6">
                    <a href="#">
                        <div className="ranking__item--thumbnail">
                            <Image src={Item3} alt='' />
                        </div>
                        <div className="ranking__item--top">3</div>
                    </a>
                    <div className="ranking__item--meta">
                        <a href="/kenja-no-deshi-wo-nanoru-kenja">
                            <div className="ranking-item-title">Kenja no Deshi wo Nanoru Kenja</div>
                        </a>
                    </div>
                </div>
                <div className="ranking__item l90 background-8">
                    <a href="#">
                        <div className="ranking__item--thumbnail">
                            <Image src={Item4} alt='' />
                        </div>
                        <div className="ranking__item--top">4</div>
                    </a>
                    <div className="ranking__item--meta">
                        <a href="/fantasy-bishoujo-juniku-ojisan-to">
                            <div className="ranking-item-title">Fantasy Bishoujo Juniku Ojisan to</div>
                        </a>
                    </div>
                </div>
                <div className="ranking__item l90 background-10">
                    <a href="#"><div className="ranking__item--thumbnail">
                        <Image src={Item5} alt=''/>
                        </div><div className="ranking__item--top">5</div></a><div className="ranking__item--meta"><a href="/naruto-shippuuden"><div className="ranking-item-title">Naruto Shippuuden</div></a></div></div>
                <div className="ranking__item l90 background-12">
                    <a href="#"><div className="ranking__item--thumbnail">
                        <Image src={Item6} alt=''/>
                        </div><div className="ranking__item--top">6</div></a><div className="ranking__item--meta"><a href="/attack-on-titan"><div className="ranking-item-title">Attack on Titan</div></a></div></div>
            </div>
        </section>
    )
}
