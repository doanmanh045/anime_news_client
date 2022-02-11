import React from 'react';
import Image from 'next/image';
import ItemManga from '../../images/video/manga/item.jpg'
export default function Manga() {
    return (
        <section className='tray manga'>
            <div className='tray__title'>
                <a className="" href="#" target='_blank'>
                    <h1>Truyện tranh</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </a>
            </div>
            <div className='tray__content manga__wrapp'>
                <div className="manga__wrap--item">
                    <a href="#" target="_blank">
                        <Image className="manga-item-thumbnail" src={ItemManga} />
                        <div className="manga-item-title">Hội Pháp Sư: Nhiệm Vụ Trăm Năm
                        </div>
                        <div className="manga-item-meta-info">
                            <span className="manga-item-label">
                                Chap 98
                            </span>
                        </div>
                    </a>
                </div>
                <div className="manga__wrap--item">
                    <a href="#" target="_blank">
                        <Image className="manga-item-thumbnail" src={ItemManga} />
                        <div className="manga-item-title">Hội Pháp Sư: Nhiệm Vụ Trăm Năm
                        </div>
                        <div className="manga-item-meta-info">
                            <span className="manga-item-label">
                                Chap 98
                            </span>
                        </div>
                    </a>
                </div>
                <div className="manga__wrap--item">
                    <a href="#" target="_blank">
                        <Image className="manga-item-thumbnail" src={ItemManga} />
                        <div className="manga-item-title">Hội Pháp Sư: Nhiệm Vụ Trăm Năm
                        </div>
                        <div className="manga-item-meta-info">
                            <span className="manga-item-label">
                                Chap 98
                            </span>
                        </div>
                    </a>
                </div>
                <div className="manga__wrap--item">
                    <a href="#" target="_blank">
                        <Image className="manga-item-thumbnail" src={ItemManga} />
                        <div className="manga-item-title">Hội Pháp Sư: Nhiệm Vụ Trăm Năm
                        </div>
                        <div className="manga-item-meta-info">
                            <span className="manga-item-label">
                                Chap 98
                            </span>
                        </div>
                    </a>
                </div>
                <div className="manga__wrap--item">
                    <a href="#" target="_blank">
                        <Image className="manga-item-thumbnail" src={ItemManga} />
                        <div className="manga-item-title">Hội Pháp Sư: Nhiệm Vụ Trăm Năm
                        </div>
                        <div className="manga-item-meta-info">
                            <span className="manga-item-label">
                                Chap 98
                            </span>
                        </div>
                    </a>
                </div>
                <div className="manga__wrap--item">
                    <a href="#" target="_blank">
                        <Image className="manga-item-thumbnail" src={ItemManga} />
                        <div className="manga-item-title">Hội Pháp Sư: Nhiệm Vụ Trăm Năm
                        </div>
                        <div className="manga-item-meta-info">
                            <span className="manga-item-label">
                                Chap 98
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
