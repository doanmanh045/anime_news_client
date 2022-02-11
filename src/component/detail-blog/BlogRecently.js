import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getElementsArray } from '../../utils/ElementsArray';
import { firestore } from '../../utils/firebaseInit';
import { convertUrlSlug } from '../../utils/RegexUrl';
export default function BlogRecently({ blogId }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        search()
    }, [blogId])
    const search = async () => {
        try {
            let filter = firestore
                .collection("Blog")
                .orderBy("createdDate", "desc")

            if (blogs && blogs.length > 0) {
                filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
            }
            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });
            let filterCurrentDay = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD") && item.id !== blogId)
            setBlogs(getElementsArray(filterCurrentDay,5));
        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <div className='closest-news'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    TIN GẦN NHÂT
                </div>
            </div>
            <div className='xs-wrapper'>
                {blogs.length > 0 && blogs.map((blog, index) => {
                    return (
                        <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} key={index} >
                            <div className='xs-item' style={{ cursor: 'pointer', marginBottom: 10 }} >
                                <div className='item__small--thumbnail item__thumbnail'>
                                    {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="150" />
                                        : <Image src={require('../../images/item.jpg')} width='300' height="180" />
                                    }
                                </div>
                                <div className='item__small--content'>
                                    <a href='#'>
                                        <h3 className="item__title">{blog?.title}</h3>
                                    </a>
                                    <a href='#'>
                                        <span className="item-genre genre-9">{blog?.category?.title}</span>
                                    </a>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}