export const getElementsArray = (arr, count) => {
    let resp = [];
    for (let i = 0; i < count; i++) {
        resp.push(arr[i])
    }
    return resp;
}