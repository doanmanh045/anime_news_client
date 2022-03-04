import React from 'react'

export default function MediumItem() {
    return (
        <div className='main-blog__left--item'>
            <div className='wrapper'>
                <div className='top__image'>
                    <img src={ItemLeft} alt="" />
                </div>
                <div className='bottom__content'>
                    <div className='bottom__content--left'>
                        1
                    </div>
                    <div className='bottom__content--right'>
                        <a href='#'>
                            <span className='item-genre has-background'>TỔNG HỢP</span>
                        </a>
                        <a href='#'>
                            <h3>
                                Top 25 tin tức hấp dẫn, được dư luận quan tâm nhất trên TinAnime trong năm 2021!
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
