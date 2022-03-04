import React from 'react'

export default function LargeItem() {
    return (
        <div className='main-blog__middle--item'>
            <div className='wrapper'>
                <img src={ItemMiddle} alt="" />
                <div className='item-meta'>
                    <a href='#'>
                        <span className="item-genre">Tin tức anime </span>
                    </a>
                    <span className="item-date">
                        / 2 giờ trước
                    </span>
                    <a href='#'>
                        <h3 className='item__title'>
                            Thiên sứ nhà bên - Otonari no Tenshi-sama Ni Itsunomanika Dame Ningen ni Sareteita Ken
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
