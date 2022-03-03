import React, { useEffect } from 'react';
import Avatar from '../../images/detail/detail-blog/avatar.jpg';
import { firestore } from '../../utils/firebaseInit';
import BlogInDay from '../detail-blog/BlogInDay';
import BlogNew from '../detail-blog/BlogNew';
import BlogRecently from '../detail-blog/BlogRecently';
import NavHomeBlog from '../home-blog/NavHomeBlog';
import { FacebookProvider, Comments } from 'react-facebook';
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
        fetchViews();
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
                            <FacebookProvider appId="4841289672632994">
                                <Comments href={`https://anime4u.vn`+`${blog?.id}`} />
                            </FacebookProvider>
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
