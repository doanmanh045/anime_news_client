import React, { useState, useEffect } from 'react';
import { firestore } from '../../../utils/firebaseInit';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { convertUrlSlug } from '../../../utils/RegexUrl';
export default function RandomMainHomeBlog() {
    const [blogs, setBlogs] = useState([]);
    let date = moment().format("YYYY-MM-DD");
    useEffect(() => {
        search()
    }, []);
    function getRandomElementsFromArray(array, numberOfRandomElementsToExtract) {
        const elements = [];

        function getRandomElement(arr) {
            if (elements.length < numberOfRandomElementsToExtract) {
                const index = Math.floor(Math.random() * arr.length)
                const element = arr.splice(index, 1)[0];
                elements.push(element)
                return getRandomElement(arr)
            } else {
                return elements
            }
        }

        return getRandomElement([...array])
    }
    const search = async () => {
        try {
            let filter = firestore
                .collection("Blog")

            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });

            let data = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") == moment(new Date()).format("YYYY-MM-DD"))
            console.log(data.length)
            setBlogs(getRandomElementsFromArray(data, 3))

        } catch {
            error => {
                console.log(error)
            }
        }
    }
    return (
        <>
            {blogs.length > 0 && <><div className='collumn-block'>
                {blogs.map((blog, index) => {
                    return (
                        <Link href={`/blog/${convertUrlSlug(blog?.title.substring(0, 35))}-${blog?.id}`} key={index} >
                            <div className={`small__col--item ${index == 2 && 'xs-hidden'}`} >
                                <div className='wrapper'>
                                    {blog?.photoURL ?
                                        <Image unoptimized loader={() => { return `${blog?.photoURL}` }} src={blog?.photoURL} width='400' height="225" />
                                        : <Image src={require('../../../images/item.jpg')} />
                                    }
                                    <div className='item-meta'>
                                        <a href='#'>
                                            <span className="item-genre">{blog?.category?.title}</span>
                                        </a>
                                        <span className="item-date md-hidden">
                                            / {moment(date).format("DD-MM-YYYY")}
                                        </span>
                                        <a href='#'>
                                            <h3 className='item__title'>
                                                {blog?.metaDescription}
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div></>}
        </>
    )
}