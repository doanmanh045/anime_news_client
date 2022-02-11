import NavHomeBlog from "../home-blog/NavHomeBlog";
import HeaderBlog from "../share/HeaderBlog";
import BlogMore from "./BlogMore";
import BlogNewest from "./BlogNewest";
import MainCategoryBlog from "./MainCategoryBlog";

export default function CategoryBlog({ category }) {
    return (
        <>
            <HeaderBlog />
            <div className='blog-page' style={{ padding: "60px 0" }}>
                <div>
                    <NavHomeBlog />
                </div>
                <div>
                    <MainCategoryBlog category={category} />
                </div>
                <div className='section anime-news newest container'>
                    <div className='wrapper'>
                        <BlogMore category={category} />
                        <BlogNewest category={category} />
                    </div>
                </div>
            </div>
        </>
    )
}