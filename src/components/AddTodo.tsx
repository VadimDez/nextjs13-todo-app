"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const AddTodo = () => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    setIsSaving(false);
    setText("");

    router.refresh();
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-2/3 rounded-md border-black border-2 disabled:opacity-75"
        disabled={isSaving}
      />
      <button
        className="w-1/3 border-2 disabled:opacity-75"
        disabled={isSaving}
      >
        Add todo
      </button>
    </form>
  );
};
