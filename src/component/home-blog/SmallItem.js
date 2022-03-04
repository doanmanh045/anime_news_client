import React from 'react'

export default function SmallItem() {
    return (
        <div className='main-blog__right--item'>
            <div className='wrapper'>
                <img src={ItemRight} alt="" />
                <div className='item-meta'>
                    <a href='#'>
                        <span className="item-genre">Tin tức anime </span>
                    </a>
                    <span className="item-date">
                        / 2 giờ trước
                    </span>
                    <a href='#'>
                        <h3 className='item__title'>
                            DanMachi đã sẵn sàng quay trở lại với khán giả ở mùa thứ 4
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
