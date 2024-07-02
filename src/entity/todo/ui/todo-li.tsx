import { Card, CardContent, CardHeader } from "@/shared"
import { TodoEntity } from "@/shared/api/mutations/todo"

export function TodoListItem({ todo }: { todo: TodoEntity }) {

    return (
        <Card>
            <CardHeader>{todo.id}</CardHeader>
            <CardContent>{todo.title}</CardContent>
            <input type="checkbox" checked={todo.completed} />
        </Card>
    )
}
