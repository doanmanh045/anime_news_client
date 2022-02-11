import { firestore } from "../../src/utils/firebaseInit";
import HeaderBlog from '../../src/component/share/HeaderBlog'
import CategoryBlog from "../../src/component/category/CategoryBlog";
export async function getServerSideProps(context) {
    const url = context.query.id;
    const id = url.substring(url.lastIndexOf("-") + 1)
    let doc = await firestore.collection("CategoryBlog").doc(id).get();
    const data = {
        ...doc.data(), id: doc.id, createdDate: doc?.data()?.createdDate?.toDate().toLocaleString('vi')
    }
    return {
        props: {
            category: data
        }
    }
}


function CategoryBlogDetail({ category }) {
    return (
        <>
            <HeaderBlog />
            <CategoryBlog category={category} />
        </>
    );
};

export default CategoryBlogDetail;

