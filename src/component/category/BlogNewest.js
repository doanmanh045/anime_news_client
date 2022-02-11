import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { firestore } from '../../utils/firebaseInit';
import { convertUrlSlug } from '../../utils/RegexUrl';
export default function BlogNewest({ category }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        search()
    }, [category.id])
    const search = async () => {
        try {
            let filter = firestore
                .collection("Blog")
                .where("category.title", "==", category.title)
                .orderBy("createdDate", "desc")
                .limit(5)
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            let data = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") < moment(new Date()).format("YYYY-MM-DD"))
            setBlogs(data)

        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <div className='anime-news__right lg-hidden'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    TIN MỚI NHẤT
                </div>
            </div>
            <div className='anime-news__right--video collumn-medium'>
                {blogs?.length > 0 && blogs.map((blog, index) => {
                    return (
                        <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} >
                            <div className={`item__video ${index > 3 && ` lg-hidden`} `} key={index} >
                                <div className='thumbnail__video'>
                                    <div className='wrapper'>
                                        {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='500' height="225" />
                                            : <Image src={require('../../images/item.jpg')} width='500' height="225" />
                                        }
                                    </div>
                                </div>
                                <div className='content__video'>
                                    <a href='#'>
                                        <h3 className="video-item-title">{blog?.title}</h3>
                                    </a>
                                    <span className="video-item-date">
                                        {blog?.createdDate?.toDate()?.toLocaleString('vi')}
                                    </span>
                                    <p className="item-description small__thumbnail--description">
                                        {blog?.metaDescription}
                                    </p>
                                </div>
                            </div>
                        </Link>


                    )
                })}
            </div>
        </div>
    )
}