import { createSelector } from "reselect"
import { CategoriesState } from "./categories.reducer"
import { CategoryMap } from "./categories.types"
import { RootState } from "../store"
const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories

const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector( 
    [selectCategories],
    (categories): CategoryMap => {
        if (!Array.isArray(categories)) {
            console.error("categories is not an array");
            return {}; // Return an empty object if categories is not an array
        }

        return categories.reduce((acc, category) => {
            const {title, items} = category
            acc[title.toLowerCase()] = items
            return acc
        },{} as CategoryMap)
    }
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (isLoadingSlice) => isLoadingSlice.isLoading
)