"use client"


import { TodoListItem } from "./todo-li"
import { useEffect } from "react"
import { useFilterAndPaginationStore, useGetAllTodos } from ".."

export function TodoList() {
   const { data, isLoading, error, setPage } = useGetAllTodos()

   const { page } = useFilterAndPaginationStore((state) => state)

   useEffect(() => {
      setPage(page)
   }, [page])

   if (isLoading) {
      return <h1>...loading</h1>
   }

   if (!!error) {
      return <h1>Error!!</h1>
   }

   if (!!data) {

      

      return (
         <ul className="list-none">
            {data.data.map((e) => (
               <li>
                  <TodoListItem todo={e} />
               </li>
            ))}
         </ul>
      )
   }
}
