import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { convertUrlSlug } from '../../utils/RegexUrl';
import { searchCategoryBlog } from '../../utils/searchCategoryBlog';

export default function NavHomeBlog() {
    const [categories, setCategories] = useState([]);
    const [activeTitile, setActiveTitle] = useState();
    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        let data = await searchCategoryBlog();
        setCategories(data)
    }
    return (
        <section className='nav__blog'>
            <div className='container'>
                <ul className='list__nav'>
                    {categories.length > 0 &&
                        categories.map((category, index) => {
                            return (
                                <Link key={index} href={`/the-loai/${convertUrlSlug(category.title.substring(0, 35))}-${category.id}`} >
                                    <li className={activeTitile == category.title ? 'list__nav--item active-list__nav--item' : 'list__nav--item  '} onClick={() => setActiveTitle(category.title)} >
                                        <span>{category.title}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    )
}
