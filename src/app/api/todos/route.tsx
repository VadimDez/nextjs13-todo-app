import { db } from "../../../../lib/db";

export async function POST(req: Request) {
  const json = await req.json();

  const todo = await db.todo.create({
    data: {
      text: json.text,
    },
  });

  return new Response(JSON.stringify(todo));
}
