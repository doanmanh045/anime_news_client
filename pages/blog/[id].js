import DetailBlog from "../../src/component/detail-blog/DetailBlog";
import { firestore } from "../../src/utils/firebaseInit";

export async function getServerSideProps(context) {
    const url = context.query.id;
    const id = url.substring(url.lastIndexOf("-") + 1)
    let doc = await firestore.collection("Blog").doc(id).get();
    const data = {
        ...doc.data(), id: doc.id, createdDate: doc?.data()?.createdDate?.toDate().toLocaleString('vi'),
        category: { ...doc.data().category, createdDate: doc?.data()?.category.createdDate?.toDate().toLocaleString('vi') }
    }
    return {
        props: {
            blog: data
        }
    }
}


function BlogDetail({ blog }) {
    return (
        <>
            <DetailBlog blog={blog} />
        </>
    );
};

export default BlogDetail;