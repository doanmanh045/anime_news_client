import { firestore } from "../../src/utils/firebaseInit";
import DetailVideo from "../../src/component/detail-video/DetailVideo";
export async function getServerSideProps(context) {
    const url = context.query.id;
    const id = url.substring(url.lastIndexOf("-") + 1)
    let doc = await firestore.collection("Video").doc(id).get();
    const data = {
        ...doc.data(), id: doc.id, createdDate: doc?.data()?.createdDate?.toDate().toLocaleString('vi') | null,
        category: { ...doc.data()?.category, createdDate: doc?.data()?.category.createdDate?.toDate().toLocaleString('vi') | null }
    }
    return {
        props: {
            video: data
        }
    }
}
function VideoDetail({ video }) {
    return (
        <>
            <DetailVideo video={video} />
        </>
    );
};

export default VideoDetail;