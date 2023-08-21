import { db } from "../../lib/db";
import { AddTodo } from "../../components/AddTodo";

async function getTodos() {
  return await db.todo.findMany({
    select: {
      id: true,
      text: true,
      done: true,
    },
  });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center">Todos:</div>
      <div className="relative flex place-items-center">
        {todos.length ? (
          <ul>
            {todos.map((todo) => {
              return <li key={todo.id}>{todo.text}</li>;
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
