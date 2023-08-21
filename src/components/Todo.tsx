"use client";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";

export const TodoComponent = ({ todo }: { todo: Todo }) => {
  const router = useRouter();

  const onClick = async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !todo.done,
      }),
    });

    router.refresh();
  };

  return (
    <div className={todo.done ? "line-through" : ""} onClick={onClick}>
      {todo.text}
    </div>
  );
};
