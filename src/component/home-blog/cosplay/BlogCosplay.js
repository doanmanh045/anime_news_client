import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { searchBlogByCategory } from '../../../utils/searchBlogByCategory';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';


export default function BlogCosplay() {
    const [blogBigs, setBlogBigs] = useState([]);
    const [blogLists, setBlogLists] = useState([]);
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchBlogByCategory('Cosplay', 5);
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
        <div className='collumn-medium collumn-left'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    COSPLAY
                </div>
            </div>
            {blogBigs?.length > 0 &&
                <Link href={`/blog/${convertUrlSlug(blogBigs[0].title.substring(0, 35))}-${blogBigs[0].id}`} >
                    <div className="item__medium">
                        <div className="item__medium--thumbnail">
                            <a href="#">
                                {blogBigs[0]?.photoURL ? <Image unoptimized loader={() => { return `${blogBigs[0]?.photoURL}` }} src={blogBigs[0]?.photoURL} width='500' height="225" />
                                    : <Image src={require('../../../images/item.jpg')} width='300' height="325" />
                                }
                            </a>
                        </div>
                        <div className="item__medium--meta">
                            <a href="#"><h3 className="item-medium-title">{blogBigs[0]?.title}</h3></a>
                            <div className="item-medium-info">
                                <span>{blogBigs[0]?.createdDate?.toDate().toLocaleString('vi')}</span>
                                <span> - {blogBigs[0]?.views} lượt xem</span>
                            </div>
                        </div>
                    </div>
                </Link>
            }
            {blogLists.length > 0 && blogLists.map((blog, index) => {
                return (
                    <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} >
                        <a className="item-text" key={index} ><li>{blog?.title}</li></a>
                    </Link>
                )
            })}
        </div>

    )
}
