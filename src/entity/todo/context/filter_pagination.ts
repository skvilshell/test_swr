"use client"
import { createContext } from "react"
import { createFilterAndPaginationStore } from "../model"

export type FilterAndPaginationApi = ReturnType<
   typeof createFilterAndPaginationStore
>

export const FilterAndPaginationContext = createContext<
   FilterAndPaginationApi | undefined
>(undefined)