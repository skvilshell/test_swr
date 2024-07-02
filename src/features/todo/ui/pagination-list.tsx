import { useFilterAndPaginationStore, useGetAllTodos } from "@/entity"
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/shared"



export function PaginationListTodos() {
   const { data, isLoading, error } = useGetAllTodos()
   const { setPage, page } = useFilterAndPaginationStore((state) => state)

   const clickHandler = (page: number | null | undefined) => {
      if (!page) {
         return
      }
      setPage(page)
   }

   if (!!error) {
      return <h1> Error !!</h1>
   }

   if (isLoading) {
      return <h1> Loading ...</h1>
   }

   if (!!data) {
      return (
         <Pagination>
            <PaginationContent>
               <PaginationItem>
                  <PaginationPrevious
                     disabled={!data.prev}
                     onClick={() => clickHandler(data.prev)}
                  />
               </PaginationItem>
               {/* Поставить троеточие, если больше 2 */}
               {page > 2 ?? (
                  <PaginationItem>
                     <PaginationEllipsis />
                  </PaginationItem>
               )}
               <PaginationItem>
                  <PaginationLink
                     isActive={!data.prev}
                     onClick={() => clickHandler(!data.prev ? 1 : page - 1)}
                  >
                     {!data.prev ? 1 : page - 1}
                  </PaginationLink>
               </PaginationItem>
               {/* Средний элемент - проверяется начало и конец */}
               <PaginationItem>
                  <PaginationLink
                     isActive={!!data.prev && !!data.next}
                     onClick={() =>
                        clickHandler(
                           !data.prev ? 2 : !data.next ? data.pages - 1 : page,
                        )
                     }
                  >
                     {!data.prev ? 2 : !data.next ? data.pages - 1 : page}
                  </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink
                     isActive={!data.next}
                     onClick={() =>
                        clickHandler(!data.next ? data.pages : page + 1)
                     }
                  >
                     {!data.next ? data.pages : page + 1}
                  </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationEllipsis />
               </PaginationItem>
               {/* Поставить троеточие, если уже конец */}
               {page < data.pages - 1 ?? (
                  <PaginationItem>
                     <PaginationEllipsis />
                  </PaginationItem>
               )}
               <PaginationItem>
                  <PaginationNext
                     disabled={!!data.next}
                     onClick={() => clickHandler(data.next)}
                  />
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      )
   }
}
