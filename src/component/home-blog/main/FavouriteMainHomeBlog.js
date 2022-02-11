import React, { useState, useEffect } from 'react';
import { firestore } from '../../../utils/firebaseInit';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';
export default function FavouriteMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false)
    const LIMIT = 5;
    let date = moment().format("YYYY-MM-DD");
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .where("writeDate", "==", date)
                .orderBy("views", "desc")
                .limit(LIMIT)

            if (blogs && blogs?.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            setBlogs(resp);
            setLoading(false)
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {!loading && <div className='news-featured xs__col'>
                <div className='section section__title section-title-small'>
                    <div className='section__title--border'></div>
                    <div className='section__title--background'>
                        TIN HAY TRONG NGÀY
                    </div>
                </div>
                {blogs.map((blog, index) => {
                    return (
                        <Link href={`/blog/${convertUrlSlug(blog?.title.substring(0, 35))}-${blog?.id}`} key={index} >
                            <div className='xs-item' >
                                <div className='item__small--thumbnail item__thumbnail'>
                                    <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='200' height="125" />
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">{blog.title}</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">{blog.category.title}</span>
                                    </a>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>}
        </>
    )
}