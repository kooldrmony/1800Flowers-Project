import { call, put, takeEvery } from "@redux-saga/core/effects";

const apiUrl = "http://jsonplaceholder.typicode.com/posts";

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
        }
    }).then(response => response.json())
      .catch((error) => {throw error})
}

function* fetchPosts(action) {
    try {
        const posts = yield call(getApi);
        yield put({ type: 'GET_POSTS_SUCCESS', posts: posts });
    } catch(e) {
        yield put({ type: "GET_POSTS_FAILED", message: e.message });
    }
}

function* postSaga() {
    yield takeEvery("GET_POSTS_REQUESTED", fetchPosts);
}

export default postSaga;