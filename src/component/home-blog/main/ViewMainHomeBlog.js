import React, { useState, useEffect } from 'react';
import { firestore } from '../../../utils/firebaseInit';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';
export default function ViewMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false)
    const LIMIT = 5;
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        setLoading(true)
        try {
            let filter = firestore
                .collection("Blog")
                .orderBy("views", "desc")
                .limit(LIMIT)

            if (blogs && blogs.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            let filterCurrentDay = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD"))
            setBlogs(filterCurrentDay);
            setLoading(false)
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {!loading && <div className='main-blog__col medium__col'>
                {blogs.map((blog, index) => {
                    return (
                        <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} key={index} >
                            <div className={`medium__col--item ${index == 4 && 'sm-hidden'}`}  >
                                <div className='wrapper'>
                                    <div className='top__image'>
                                        {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="175" />
                                            : <Image src={img} />
                                        }
                                    </div>
                                    <div className='bottom__content'>
                                        <div className='bottom__content--left sm-hidden'>
                                            {index + 1}
                                        </div>
                                        <div className='bottom__content--right'>
                                            <a href='#'>
                                                <span className='item-genre has-background'>{blog?.category?.title}</span>
                                            </a>
                                            <a href='#'>
                                                <h3 className='item__title'>
                                                    {blog?.metaDescription}
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            }
        </>
    )
}