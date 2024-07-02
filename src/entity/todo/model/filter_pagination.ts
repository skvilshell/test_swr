
import { CONSTANTS } from "@/shared"
import {  useContext } from "react"
import { createStore, useStore } from "zustand"
import { FilterAndPaginationContext } from ".."

export interface FilterAndPaginationState {
   page: number
   per_page: number
   prev: number | null
   next: number | null
}

export interface FilterAndPaginationAcion {
   setPage: (page: number) => void
   setPerPage: (per_page: number) => void
   nextPage: () => void
   previosPage: () => void
}

export type FilterAndPaginationStore = FilterAndPaginationAcion &
   FilterAndPaginationState

// Начальные значения
const defaultState: FilterAndPaginationState = {
   page: CONSTANTS.PAGE,
   per_page: CONSTANTS.PER_PAGE,
   next: CONSTANTS.NEXT_PAGE,
   prev: CONSTANTS.PREV_PAGE,
}

export const createFilterAndPaginationStore = (
   initState: FilterAndPaginationState = defaultState,
) => {
   return createStore<FilterAndPaginationStore>()((set) => ({
      ...initState,
      //установить страницу
      // TODO:  Попробовать убарть `...state`
      setPage: (page: number) => {
         set((state) => ({ ...state, page }))
      },
      // установить кол-во элементов
      setPerPage: (per_page: number) => {
         set((state) => ({ ...state, per_page }))
      },
      // Следующая страница
      nextPage: () => {
         set((state) => ({ ...state, page: state.page + 1 }))
      },
      // Предыдущая страница
      previosPage: () => {},
   }))
}

export const useFilterAndPaginationStore = <T>(
   selector: (store: FilterAndPaginationStore) => T,
): T => {
   const filter_paginationStoreContext = useContext(FilterAndPaginationContext)

   if (!filter_paginationStoreContext) {
      throw new Error(
         "useFilterAndPaginationStore должен использоваться в FilterAndPaginationContext",
      )
   }

   return useStore(filter_paginationStoreContext, selector)
}
