import { PrismaPromise, Todo } from "@prisma/client";

import { db } from "../../lib/db";
import { AddTodo } from "../components/AddTodo";
import { TodoComponent } from "../components/Todo";

async function getTodos() {
  return db.todo.findMany({
    select: {
      id: true,
      text: true,
      done: true,
    },
  });
}

export default async function Home() {
  const todos = (await getTodos()) as Todo[];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center">Todos:</div>
      <div className="relative flex place-items-center">
        {todos.length ? (
          <ul>
            {todos.map((todo: Todo) => {
              return (
                <li key={todo.id}>
                  <TodoComponent todo={todo} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex">No todos</div>
        )}
      </div>
      <div className="relative flex place-items-center">
        <AddTodo />
      </div>
    </main>
  );
}
