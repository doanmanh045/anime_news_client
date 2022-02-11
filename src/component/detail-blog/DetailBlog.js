import Image from 'next/image';
import React, { useEffect } from 'react';
import Avatar from '../../images/detail/detail-blog/avatar.jpg';
import { firestore } from '../../utils/firebaseInit';
import BlogInDay from '../detail-blog/BlogInDay';
import BlogNew from '../detail-blog/BlogNew';
import BlogRecently from '../detail-blog/BlogRecently';
import NavHomeBlog from '../home-blog/NavHomeBlog';
export default function DetailBlog({ blog }) {
    let fetchViews = async () => {
        try {
            await firestore.collection("Blog").doc(blog.id).get().then(doc => {
                let views = doc.data().views;
                firestore.collection("Blog").doc(blog.id).update({
                    views: views + 1
                })
            })
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchViews()
    }, [])
    return (
        <div className='detail-page'>
            <div className='container'>
                <NavHomeBlog />
            </div>
            <div className='container main-detail'>
                <div className='main-detail__left collumn-super'>
                    <h1 className="news-title">{blog?.title}</h1>
                    <div className="news-information">
                        <div className="news-meta">
                            <ul>
                                <li>{blog?.createdDate}</li>
                                <li>{blog?.views} lượt xem</li>
                            </ul>
                        </div>
                        <span className="news-genre genre-9 has-background">Thể loại: {blog?.category?.title}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', marginTop: 15 }} >
                        {blog?.metaDescription}
                    </div>
                    <div className='content-detail'  >
                        <p dangerouslySetInnerHTML={{ __html: blog?.content }} ></p>
                        <p className='author'>{blog?.user?.displayName}</p>
                    </div>
                    <div className="news-comment">
                        <div className='section section__title section-title-small'>
                            <div className='section__title--border'></div>
                            <div className='section__title--background'>
                                BÌnh luận
                            </div>
                        </div>
                        <div className='main-comment'>
                            <div className='main-comment__filter'>
                                <div className='main-comment__filter--left'>
                                    <span>
                                        <b className='number-comment'>3 Comments</b>
                                    </span>
                                </div>
                                <div className='main-comment__filter--right'>
                                    <label htmlFor="filter">Sort by</label>
                                    <select name="filter" id="filter">
                                        <option value="Newest">Newest</option>
                                        <option value="Oldest">Oldest</option>
                                    </select>
                                </div>
                            </div>
                            <div className='main-comment__content'>
                                <div className='self-comment comment'>
                                    <div className='avatar'>
                                        <Image src={Avatar} alt='' />
                                    </div>
                                    <div className='type-comment'>
                                        <input type='text' className='' placeholder='Add a comment...' />
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='avatar'>
                                        <Image src={Avatar} alt='' />
                                    </div>
                                    <div className='type-comment'>
                                        <b className='name'>Hoang Hung</b>
                                        <p>Troi oi</p>
                                        <div className='action'>
                                            <a href="#">Like</a>
                                            <span aria-hidden="true"> · </span>
                                            <a href="#">Reply</a>
                                            <span aria-hidden="true"> · </span>
                                            <span className='time'>6h</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='comment'>
                                    <div className='avatar'>
                                        <Image src={Avatar} alt='' />
                                    </div>
                                    <div className='type-comment'>
                                        <b className='name'>Hoang Hung</b>
                                        <p>Troi oi</p>
                                        <div className='action'>
                                            <a href="#">Like</a>
                                            <span aria-hidden="true"> · </span>
                                            <a href="#">Reply</a>
                                            <span aria-hidden="true"> · </span>
                                            <span className='time'>6h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <BlogNew blogId={blog?.id} />
                        </div>
                    </div>
                </div>
                <div className='main-detail__right news-featured xs__col'>
                    <BlogRecently blogId={blog?.id} />
                    <BlogInDay blogId={blog?.id} />
                </div>
            </div>
        </div>
    )
}
