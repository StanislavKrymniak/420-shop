import {takeLatest, all, call, put} from'typed-redux-saga/macro'
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action'
import { CATEGORIES_ACTION_TYPES } from './categories.types'

const API_URL = 'http://localhost/getCategories.php'

async function fetchCategoriesFromAPI() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return await response.json();
}

export function* fetchCategoriesAsync() {
    try {
        const categoryArray = yield* call(fetchCategoriesFromAPI);
        yield* put(fetchCategoriesSuccess(categoryArray));

    } catch (error) {
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

export function* onFetchCategories() {
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)]);
}