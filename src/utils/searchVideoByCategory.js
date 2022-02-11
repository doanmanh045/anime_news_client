import { firestore } from "./firebaseInit"
export const searchVideoByCategory = async (categoryTitle, limit) => {
    try {
        let filter = firestore
            .collection("Video")
            .orderBy("createdDate", "desc")
            .limit(limit)
        if (categoryTitle?.trim()?.length > 0) {
            filter = filter.where("category.title", "==", categoryTitle)
        }
        let querySnapshot = await (await filter.get()).docs
        let data = []
        querySnapshot.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id })
        });
        return data;
    } catch {
        error => {
            console.log(error)
        }
    }
}