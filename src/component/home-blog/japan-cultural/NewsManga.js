import React, { useEffect, useState } from 'react';
import { searchBlogByCategory } from '../../../utils/searchBlogByCategory';
import Image from 'next/image';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';


export default function NewsManga() {
    const [blogBigs, setBlogBigs] = useState([]);
    const [blogLists, setBlogLists] = useState([]);
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchBlogByCategory('Tin tức Manga', 6);
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
        <div className='japan-cultural__right collumn-medium'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    TIN TỨC MANGA
                </div>
            </div>
            <div className='wrapper-medium'>
                {blogBigs?.length > 0 && <div className="item__medium">
                    <div className="item__medium--thumbnail">
                        <Link href={`/blog/${convertUrlSlug(blogBigs[0].title.substring(0, 35))}-${blogBigs[0].id}`}>
                            {blogBigs[0]?.photoURL ? <Image unoptimized loader={() => { return `${blogBigs[0]?.photoURL}` }} src={blogBigs[0]?.photoURL} width='500' height="225" />
                                : <Image src={require('../../../images/item.jpg')} width='500' height="225" />
                            }
                        </Link>
                    </div>
                    <div className="item__medium--meta">
                        <h3 className="item-medium-title">{blogBigs[0]?.title}</h3>
                        <div className="item-medium-info">
                            <span>{blogBigs[0]?.createdDate?.toDate().toLocaleString('vi')}</span>
                            <span> - {blogBigs[0]?.views} lượt xem</span>
                        </div>
                    </div>
                </div>}

                <div className='wrapper__manga xs__col'>
                    {blogLists?.length > 0 && blogLists.map((blog, index) => {
                        return (
                            <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} key={index} >
                                <div className={`xs-item ${index > 2 && ' lg-hiden'}`} >
                                    <div className='item__small--thumbnail item__thumbnail'>
                                        {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='500' height="225" />
                                            : <Image src={require('../../../images/item.jpg')} width='500' height="225" />
                                        }
                                    </div>
                                    <div className='item__small--content item__content'>
                                        <a href='#'>
                                            <h3 className="item__title">{blog?.title}</h3>
                                        </a>
                                    </div>
                                </div>
                            </Link>


                        )
                    })}
                </div>
            </div>
        </div>
    )
}