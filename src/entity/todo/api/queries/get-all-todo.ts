"use client"

import { CONSTANTS, GET, ServerResponse, getKey } from "@/shared"
import { type TodoEntity } from "./entities"
import { useState } from "react"
import useSWR from "swr"
import { useSearchParams } from "next/navigation"



/**
 * Хук для делает запрос на пагинацию
 */
export function useGetAllTodos() {
   const [page, setPage] = useState<number>(CONSTANTS.PAGE)
   const [perPage, setPerPage] = useState<number>(CONSTANTS.PER_PAGE)
   const router = useSearchParams()

   if(!!router.get("_page")){
      setPage(()=> Number(router.get("_page")))
   }  

   if(!!router.get("_per_page")) {
      setPerPage(()=> Number(router.get("_per_page")))
   }

   const params = {
      _page: page,
      _per_page: perPage,
   }

   const url = getKey("/todos", params)

   const data = useSWR<ServerResponse<TodoEntity>>(url, GET)

   return { ...data, page, setPage, perPage, setPerPage }
}
