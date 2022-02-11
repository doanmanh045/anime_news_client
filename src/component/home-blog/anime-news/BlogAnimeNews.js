import React, { useEffect, useState } from 'react';
import { searchBlogByCategory } from '../../../utils/searchBlogByCategory';
import Image from 'next/image';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';
export default function BlogAnimeNews() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchBlogByCategory('Tin Anime', 5);
        setBlogs(data)
    }
    return (
        <>
            {blogs?.length > 0 &&
                <div className='anime-news__left collumn-super'>
                    {blogs.map((blog, index) => {
                        return (
                            <Link href={`/blog/${convertUrlSlug(blog?.title.substring(0, 35))}-${blog?.id}`} key={index} >
                                <div className={`anime-news__left--item ${index > 0 && 'lg-hidden'}`}  >
                                    <div className='item__thumbnail'>
                                        {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="225" />
                                            : <Image src={require('../../../images/item.jpg')} width='300' height="225" />
                                        }
                                    </div>
                                    <div className='item__content'>
                                        <a href='#'>
                                            <span className="item-genre genre-2 has-background ">Tin tức anime</span>
                                        </a>
                                        <a href='#'>
                                            <h3 className="item__title">{blog.title}</h3>
                                        </a>
                                        <span className="item-date">{blog?.createdDate?.toDate().toLocaleString('vi')}</span>
                                        &nbsp;
                                        <span className="item-views"> - {blog?.views} lượt xem</span>
                                        <p className="item-description">
                                            {blog?.metaDescription}
                                        </p>
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