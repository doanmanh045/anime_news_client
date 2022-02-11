import { firestore } from "./firebaseInit"
import moment from "moment"
export const searchBlogByCategory = async (categoryTitle, limit) => {
    try {
        let filter = firestore
            .collection("Blog")
            .where("category.title", "==", categoryTitle)
            .orderBy("createdDate", "desc")
        if (limit) {
            filter = filter.limit(limit)
        }
        let querySnapshot = await (await filter.get()).docs
        let resp = []
        querySnapshot.forEach(doc => {
            resp.push({ ...doc.data(), id: doc.id })
        });
        let data = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD"))
        return data;
    } catch {
        error => {
            console.log(error)
        }
    }
}