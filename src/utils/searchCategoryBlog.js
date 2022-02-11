import { firestore } from "./firebaseInit"
export const searchCategoryBlog = async () => {
    try {
        let filter = firestore
            .collection("CategoryBlog")
        let querySnapshot = await (await filter.get()).docs
        let resp = []
        querySnapshot.forEach(doc => {
            resp.push({ ...doc.data(), id: doc.id })
        });
        return resp;
    } catch {
        error => {
            console.log(error)
        }
    }
}