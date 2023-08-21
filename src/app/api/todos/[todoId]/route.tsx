import { db } from "../../../../../lib/db";

export async function PATCH(
  req: Request,
  context: { params: { todoId: string; done: boolean } }
) {
  const json = await req.json();
  await db.todo.update({
    where: {
      id: parseInt(context.params.todoId, 10),
    },
    data: {
      done: json.done,
    },
  });
  return new Response(null, { status: 204 });
}
