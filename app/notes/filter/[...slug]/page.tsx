"use client";

import { useParams } from "next/navigation";
import NotesClient from "../../Notes.client";

export default function FilterPage() {
  const { slug } = useParams<{ slug: string[] }>();
  const tag = slug?.[0] ?? "all"; // перший параметр /filter/work

  return <NotesClient tag={tag} />;
}
