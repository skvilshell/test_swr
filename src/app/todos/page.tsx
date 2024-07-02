import { TodoList } from "@/entity"
import { PaginationListTodos, TodoDialogCreate } from "@/features"
import { FilterAndPaginationProvider } from "@/app/(providers)/store"

export default function TodoListPage() {
   return (
      <FilterAndPaginationProvider>
         <main className="w-full flex justify-center">
            <div className="max-w-96">
               <TodoDialogCreate />
               <TodoList />
               <PaginationListTodos />
            </div>
         </main>
      </FilterAndPaginationProvider>
   )
}
