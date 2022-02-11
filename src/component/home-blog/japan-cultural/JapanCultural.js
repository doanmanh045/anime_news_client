import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { convertUrlSlug } from '../../../utils/RegexUrl';
import { searchBlogByCategory } from '../../../utils/searchBlogByCategory';
import NewsManga from './NewsManga';


export default function JapanCultural() {
    const [blogBigs, setBlogBigs] = useState([]);
    const [blogLists, setBlogLists] = useState([]);
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchBlogByCategory('Văn hóa Nhật Bản', 4);
        let respBig = [];
        let respList = [];
        data?.map((item, index) => {
            if (index < 1) {
                respBig.push(item)
            } else {
                respList.push(item)
            }
        })
        setBlogBigs(respBig)
        setBlogLists(respList)
    }
    return (
        <div className='section container japan-cultural'>
            <div className='japan-cultural__left collumn-super'>
                <div className='section section__title section-title-small'>
                    <div className='section__title--border'></div>
                    <div className='section__title--background'>
                        VĂN HÓA NHẬT BẢN
                    </div>
                </div>
                <div className='wrapper-super'>
                    {blogBigs.length > 0 && <div className='item__large'>
                        <div className='item__large--thumbnail'>
                            <a href='#'>
                                {blogBigs[0]?.photoURL ? <Image unoptimized loader={() => { return `${blogBigs[0]?.photoURL}` }} src={blogBigs[0]?.photoURL} width='500' height="225" />
                                    : <Image src={require('../../../images/item.jpg')} width='500' height="225" />
                                }
                            </a>
                        </div>
                        <div className="item__large--meta">
                            <a href="#" className='lg-hidden'>
                                <span className="item-large-genre genre-5 has-background">Văn hóa Nhật Bản</span>
                            </a>
                            <a href="#"><h3 className="item-large-title">{blogBigs[0]?.title}</h3></a>
                            <div className="item-large-info">
                                <span>{blogBigs[0]?.createdDate.toDate().toLocaleString('vi')}</span>
                                <span> - {blogBigs[0]?.views} lượt xem</span>
                            </div>
                        </div>
                    </div>}

                    <div className='wrapper-medium'>
                        {blogLists.length > 0 && blogLists.map((blog, index) => {
                            return (
                                <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} >
                                    <div className='item__medium' key={index} >
                                        <div className='item__thumbnail'>
                                            {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='500' height="225" />
                                                : <Image src={require('../../../images/item.jpg')} width='500' height="225" />
                                            }
                                        </div>
                                        <div className='item__content'>
                                            <a href='#'>
                                                <h3 className="item__title">{blog?.title}</h3>
                                            </a>
                                            <span className="item-date">{blog?.createdDate?.toDate().toLocaleString('vi')}</span>
                                            &nbsp;
                                            <span className="item-views"> - {blog?.views} lượt xem</span>
                                            <p className="item-description">{blog?.metaDescription}</p>
                                        </div>
                                    </div>

                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <NewsManga />
        </div>
    )
}
