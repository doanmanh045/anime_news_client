import React, { useEffect, useState } from 'react';
import LargeItem from '../../../images/blog/middle-item.jpg';
import MediumItem from '../../../images/blog/item-left.jpg';
import SmallThumbnail from '../../../images/blog/small-thumbnail.jpg'
import Image from 'next/image'
import { searchBlogByCategory } from '../../../utils/searchBlogByCategory';
import { searchCategoryByTitle } from '../../../utils/searchCategoryByTitle';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';
export default function AnimeNomination() {
    const [blogLefts, setBlogLefts] = useState([]);
    const [blogMediums, setBlogMediums] = useState([]);
    const [blogRights, setBlogRights] = useState([]);
    let [category, setCategory] = useState();
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchBlogByCategory('Đề cử Anime');
        let dataCategory = await searchCategoryByTitle('Đề cử Anime');
        let respLeft = [];
        let respMedium = [];
        let respRight = [];
        data?.map((item, index) => {
            if (index < 3) {
                respLeft.push(item)
            } else if (index < 7) {
                respMedium.push(item)
            } else if (index < 12) {
                respRight.push(item)
            }
        })
        setBlogLefts(respLeft);
        setBlogMediums(respMedium);
        setBlogRights(respRight);
        setCategory(dataCategory)
    }
    return (
        <div className='section anime-nomination container'>
            <div className='section section__title section-title-small'>
                <div className='section__title--border'></div>
                <div className='section__title--background'>
                    ĐỀ CỬ ANIME
                </div>
            </div>
            <div className='big__wrapper'>
                <div className='anime-nomination__col large__col'>
                    {blogLefts?.length > 0 && blogLefts.map((blog, index) => {
                        return (
                            <Link href={`/blog/${convertUrlSlug(blog?.title.substring(0, 35))}-${blog?.id}`} key={index} >
                                <div className='large__col--item'  >
                                    <div className='wrapper'>
                                        {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='500' height="225" />
                                            : <Image src={require('../../../images/item.jpg')} width='500' height="225" />
                                        }
                                        <div className='item-meta'>
                                            <span className="item-genre">Đề cử anime </span>
                                            <span className="item-date">
                                                / {blog?.createdDate.toDate().toLocaleString('vi')}
                                            </span>
                                            <h3 className='item__title'>
                                                {blog?.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className='anime-nomination__col medium__col'>
                    {blogMediums.length > 0 && blogMediums.map((blog, index) => {
                        return (
                            <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} >
                                <div className={`medium__col--item ${index == 3 && 'sm-hidden'}`} key={index} >
                                    <div className='wrapper'>
                                        <div className='top__image'>
                                            {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="225" />
                                                : <Image src={require('../../../images/item.jpg')} width='300' height="225" />
                                            }
                                        </div>
                                        <div className='bottom__content'>
                                            <div className='item-meta'>
                                                <a href='#'>
                                                    <span className="item-genre">Đề cử anime </span>
                                                </a>
                                                <span className="item-date">
                                                    / {blog?.createdDate.toDate().toLocaleString('vi')}
                                                </span>
                                                <a href='#'>
                                                    <h3 className='item__title'>
                                                        {blog?.title}
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
                <div className='anime-nomination__col xs__col'>
                    <div>
                        {category?.photoURL ? <Image unoptimized loader={() => { return `${category?.photoURL}` }} src={category?.photoURL} width='300' height="225" />
                            : <Image src={require('../../../images/item.jpg')} width='300' height="225" />
                        }
                    </div>
                    <div className='wrapper'>
                        {blogRights.length > 0 && blogRights.map((blog, index) => {
                            return (
                                <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} >
                                    <div className='xs-item' key={index} >
                                        <div className='item__small--thumbnail item__thumbnail'>
                                            {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="225" />
                                                : <Image src={require('../../../images/item.jpg')} width='300' height="225" />
                                            }
                                        </div>
                                        <div className='item__small--content'>
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

        </div>
    )
}
