import { Todo } from "@prisma/client"

import { db } from "../../../../lib/db";

async function getTodo(todoId: Todo("id")) {
  return await db.todo.findFirst({
    where: {
      id: todoId
    },
  });
}

interface TodoPageProps {
  params: { todoId: number }
}

export default function Todo({ params }: TodoPageProps) {
  const todo = await getTodo(params.todoId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        Todo {todo.id} {todo.text}
      </div>
    </main>
  )
}
