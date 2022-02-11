// import firebase from "firebase";
// import { firestore } from "../utils/firebaseInit";
// import { blog_terms, LIMIT_PER_PAGE } from "../../utils/constants";

// export const requestSearch = async (startAfter) => {
//     try {
//         let query = firebase.firestore()
//             .collection("Blog-Terms")
//             .where("type", "==", blog_terms.POST_CATEGORY)
//             .orderBy("createdAt", 'desc')
//             .limit(LIMIT_PER_PAGE)

            
//         if (startAfter) {
//             query = query.startAfter(startAfter)
//         }

//         let querySnapshot = await query.get()
//         let data = []
//         querySnapshot.forEach(doc => data.push({ ...doc.data(), id: doc.id }))

//         let hasMore = (data.length === LIMIT_PER_PAGE)

//         let filter = firestore
//                 .collection("Blog")
//                 .orderBy("views", "desc")
//                 .limit(LIMIT)

//             if (blogs && blogs.length > 0) {
//                 filter = filter.startAfter(blogs[blogs.length - 1].createdDate)
//             }
//             let querySnapshot = await (await filter.get()).docs
//             let resp = []
//             querySnapshot.forEach(doc => {
//                 resp.push({ ...doc.data(), id: doc.id })
//             });
//             let filterCurrentDay = resp.filter(item => moment(item.writeDate, "YYYY-MM-DD").format("YYYY-MM-DD") <= moment(new Date()).format("YYYY-MM-DD"))
//             setBlogs(filterCurrentDay);
//             setLoading(false)


//         return { data, hasMore }
//     } catch (err) {
//         console.log(err)
//         throw "error.server"
//     }
// }
