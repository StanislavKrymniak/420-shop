import { createSelector } from "reselect"

const selectCategoriesReducer = (state) => state.categories

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector( 
    [selectCategories],
    (categories) => {
        if (!Array.isArray(categories)) {
            console.error("categories is not an array");
            return {}; // Return an empty object if categories is not an array
        }

        return categories.reduce((acc, category) => {
            const {title, items} = category
            acc[title.toLowerCase()] = items
            return acc
        },{})
    }
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (isLoadingSlice) => isLoadingSlice.isLoading
)