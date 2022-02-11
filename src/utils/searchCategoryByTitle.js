import { firestore } from "./firebaseInit"
export const searchCategoryByTitle = async (categoryTitle) => {
    try {
        let filter = firestore
            .collection("CategoryBlog")
            .where("title", "==", categoryTitle)
        let querySnapshot = await (await filter.get()).docs
        let resp = []
        querySnapshot.forEach(doc => {
            resp.push({ ...doc.data(), id: doc.id })
        });
        let data = resp[0];
        return data;
    } catch {
        error => {
            console.log(error)
        }
    }
}