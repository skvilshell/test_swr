"use client"

import {
   FilterAndPaginationApi,
   FilterAndPaginationContext,
   createFilterAndPaginationStore,
} from "@/entity"
import { type ReactNode, useRef } from "react"

export interface FilterAndPaginationProviderProps {
   children: ReactNode
}

export const FilterAndPaginationProvider = ({
   children,
}: FilterAndPaginationProviderProps) => {
   const storeRef = useRef<FilterAndPaginationApi>()
   if (!storeRef.current) {
      storeRef.current = createFilterAndPaginationStore()
   }

   return (
      <FilterAndPaginationContext.Provider value={storeRef.current}>
         {children}
      </FilterAndPaginationContext.Provider>
   )
}
