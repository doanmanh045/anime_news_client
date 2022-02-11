import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import moment from 'moment';
import { firestore } from '../../utils/firebaseInit';
import Link from 'next/link';
import { convertUrlSlug } from '../../utils/RegexUrl';
export default function BlogNew({ blogId }) {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(false);
    const LIMIT = 5;
    useEffect(() => {
        search(false)
    }, [blogId])
    const search = async (loadMore) => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .orderBy("createdDate", 'desc')
                .limit(LIMIT)
            if (loadMore && blogs.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }

            let querySnapshot = await filter.get()
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            resp = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD") && item.id !== blogId)

            if (loadMore) {
                setBlogs([...blogs, ...resp])
            } else {
                setBlogs(resp)
            }
            setHasMore(resp.length === LIMIT)
        } catch { }
        setLoading(false)
    }
    return (
        <div className='anime-news__left detail-blog__new collumn-super'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    TIN KHÁC
                </div>
            </div>
            <div className='wrapper-item__news'>
                {blogs.length > 0 && blogs.map((blog, index) => {
                    return (
                        <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} key={index} >
                            <div className='anime-news__left--item'  >
                                <div className='item__thumbnail'>
                                    {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="180" />
                                        : <Image src={require('../../images/item.jpg')} width='300' height="180" />
                                    }
                                </div>
                                <div className='item__content'>
                                    <span className="item-genre genre-2 has-background lg-hidden">{blog?.category?.title}</span>
                                    <h3 className="item__title">{blog?.title}</h3>
                                    <span className="item-date">{blog?.createdDate?.toDate().toLocaleString('vi')}</span>
                                    &nbsp;
                                    <span className="item-views"> - {blog?.views} lượt xem</span>
                                    <p className="item-description big__thumbnail--description">
                                        {blog?.metaDescription}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                {hasMore && <div className="column-more" onClick={() => search(true)} style={{ cursor: 'pointer' }} >XEM THÊM</div>}
            </div>
        </div>
    )
}
