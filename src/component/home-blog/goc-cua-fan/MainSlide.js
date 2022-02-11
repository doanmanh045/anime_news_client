import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { convertUrlSlug } from '../../../utils/RegexUrl';
import { searchBlogByCategory } from '../../../utils/searchBlogByCategory';
import Link from 'next/link';
export default function MainSlide() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchBlogByCategory('Góc của Fan');
        setBlogs(data)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        // prevArrow: '.prev-btn',
        // nextArrow: '.next-btn',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='section main-slide'>
            <div className='container'>
                <div className='slide__title'>
                    <a href="#">[Góc của fan]</a>
                </div>
                {blogs?.length > 0 && <Slider {...settings}>
                    {blogs?.map((blog, index) => {
                        return (
                            <Link href={`/blog/${convertUrlSlug(blog.title.substring(0, 35))}-${blog.id}`} >
                                <div className='main-slide__item' key={index} >
                                    <div className='thumbnail-item'>
                                        <a href='#'>
                                            {blog?.photoURL ? <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='300' height="180" />
                                                : <Image src={require('../../../images/item.jpg')} width='300' height="180" />
                                            }
                                        </a>
                                    </div>
                                    <div className='content-item'>
                                        <a href='#'>
                                            <h3 className="item-slide-title">[Góc của fan] {blog.title}</h3>
                                        </a>
                                    </div>
                                </div>
                            </Link>

                        )
                    })}
                </Slider>}

            </div>
        </div>
    )
}
