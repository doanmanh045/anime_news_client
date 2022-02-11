// import { createSlice } from '@reduxjs/toolkit';
// import { requestAdd, requestDeleteBatch, requestDeleteById, requestEdit, requestSearch, requestSearchByName } from '../../services/blog/blog.category.service';
// import { requestUploadImage } from '../../services/blog/uploadfile.service';
// import { showErrorAlert, showSuccessAlert } from '../alertSlice';
// import { updateProgress } from '../progressSlice';

// const initialState = {
//     data: [],
//     hasMore: false,
//     queryName: ''
// };

// export const blogCategorySlice = createSlice({
//     name: 'blogCategory',
//     initialState,
//     reducers: {
//         setData: (state, action) => {
//             state.data = action.payload.data
//             state.hasMore = action.payload.hasMore
//         },
//         setQueryName: (state, action) => {
//             state.queryName = action.payload
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { setData, setQueryName } = blogCategorySlice.actions

// // Define a thunk that dispatches those action creators
// export const searchCategorys = (loadMore, startAfter) => async (dispatch, getState) => {
//     dispatch(updateProgress(0))
//     try {
//         let body = { data: [], hasMore: false }
//         let queryName = getState().blogCategory.queryName

//         if (queryName)
//             body = await requestSearchByName(queryName, startAfter)
//         else
//             body = await requestSearch(startAfter)

//         if (loadMore) {
//             let data = getState().blogCategory.data
//             body.data = data.concat(body.data)
//         }

//         dispatch(setData(body))
//     } catch (err) {
//         dispatch(showErrorAlert(err))
//     }
//     //done
//     dispatch(updateProgress(100))
// }

// export const addCategory = (item) => async (dispatch) => {
//     dispatch(updateProgress(0))
//     try {
//         let { photoFile, ...other } = item;

//         let now = new Date()

//         let fileExt = photoFile.name.substring(photoFile.name.lastIndexOf("."))

//         let path = `blog/category/${now.getFullYear()}/${now.getMonth()}/${other.slug}${fileExt}`

//         let photoURL = await requestUploadImage(path, photoFile)
//         await requestAdd({ ...other, photoURL })
//         dispatch(searchCategorys())
//         dispatch(showSuccessAlert("success.add"))
//     } catch (err) {
//         dispatch(showErrorAlert(err))
//     }
//     //done
//     dispatch(updateProgress(100))
// }

// export const editCategory = (item) => async (dispatch) => {
//     dispatch(updateProgress(0))
//     try {
//         let { photoFile, ...other } = item;

//         if (photoFile) {
//             let now = new Date()

//             let fileExt = photoFile.name.substring(photoFile.name.lastIndexOf("."))

//             let path = `blog/category/${now.getFullYear()}/${now.getMonth()}/${other.slug}${fileExt}`

//             let photoURL = await requestUploadImage(path, photoFile)

//             await requestEdit({ ...other, photoURL })
//         } else {
//             await requestEdit({ ...other })
//         }

//         dispatch(searchCategorys())
//         dispatch(showSuccessAlert("success.edit"))
//     } catch (err) {
//         dispatch(showErrorAlert(err))
//     }
//     //done
//     dispatch(updateProgress(100))
// }

// export const deleteCategory = (id) => async (dispatch) => {
//     dispatch(updateProgress(0))
//     try {
//         await requestDeleteById(id)
//         dispatch(searchCategorys())
//         dispatch(showSuccessAlert("success.delete"))
//     } catch (err) {
//         dispatch(showErrorAlert(err))
//     }
//     //done
//     dispatch(updateProgress(100))
// }

// export const deleteManyCategorys = (ids) => async (dispatch) => {
//     dispatch(updateProgress(0))
//     try {
//         await requestDeleteBatch(ids)
//         dispatch(searchCategorys())
//         dispatch(showSuccessAlert("success.delete"))
//     } catch (err) {
//         dispatch(showErrorAlert(err))
//     }
//     //done
//     dispatch(updateProgress(100))
// }

// export default blogCategorySlice.reducer